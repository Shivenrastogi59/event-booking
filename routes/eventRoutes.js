const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

// Public
router.get('/', eventController.getAllEvents);

// Admin only
router.post('/create', authenticateToken, authorizeRoles('admin'), eventController.createEvent);
router.put('/:id', authenticateToken, authorizeRoles('admin'), eventController.updateEvent);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), eventController.deleteEvent);

module.exports = router;
