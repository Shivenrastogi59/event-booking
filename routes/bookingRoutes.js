const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController.js');
const { authenticateToken } = require('../middleware/authMiddleware.js');

router.post('/book', authenticateToken, bookingController.bookEvent);
router.get('/my-bookings', authenticateToken, bookingController.getMyBookings);
router.delete('/cancel/:id', authenticateToken, bookingController.cancelBooking);

module.exports = router;
