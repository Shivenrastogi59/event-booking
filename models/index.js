const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.MYSQL_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require('./user')(sequelize, DataTypes);
db.Event = require('./event')(sequelize, DataTypes);
db.Booking = require('./booking')(sequelize, DataTypes);

// ✅ Use db.Booking here instead of Booking
db.User.hasMany(db.Booking, { foreignKey: 'userId' });
db.Event.hasMany(db.Booking, { foreignKey: 'eventId' });

db.Booking.belongsTo(db.User, { foreignKey: 'userId' });
db.Booking.belongsTo(db.Event, { foreignKey: 'eventId' });

module.exports = db;
