const { Booking, Event } = require('../models');

exports.bookEvent = async (req, res) => {
  const { eventId } = req.body;
  const userId = req.user.id;

  try {
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.availableSeats < 1) {
      return res.status(400).json({ message: 'No seats available' });
    }

    // Prevent double booking
    const existingBooking = await Booking.findOne({
      where: { userId, eventId }
    });
    if (existingBooking) {
      return res.status(400).json({ message: 'Already booked this event' });
    }

    await Booking.create({ userId, eventId });
    await event.decrement('availableSeats');

    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.user.id },
      include: ['Event'] // ensure Event model is aliased properly
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const booking = await Booking.findOne({ where: { id, userId } });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    await Event.increment('availableSeats', { where: { id: booking.eventId } });
    await booking.destroy();

    res.json({ message: 'Booking cancelled' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
