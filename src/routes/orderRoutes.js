// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {getOrders,placeOrder} = require('../controllers/orderController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/place', authenticateToken, placeOrder);
router.get('/', authenticateToken, getOrders);

module.exports = router;
