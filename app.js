const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./models');

const authRoutes = require('./routes/authRoutes.js');
const eventRoutes = require('./routes/eventRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

db.sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing DB:', err));

module.exports = app;
