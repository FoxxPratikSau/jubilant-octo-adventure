// src/routes/deliveryRoutes.js
const express = require('express');
const router = express.Router();
const {assignDelivery,updateDeliveryStatus} = require('../controllers/deliveryController');

// Example route: Assign delivery
router.post('/assign', assignDelivery);

// Example route: Update delivery status
router.post('/update-status', updateDeliveryStatus);

// Export the router directly
module.exports = router;
