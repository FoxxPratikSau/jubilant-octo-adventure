// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');

// Apply authentication middleware to all routes in this router
// router.use(authenticate);

// Route to add a product (only accessible by authenticated users)
router.post('/add', authenticate, addProduct);

// Route to get products (public or authenticated based on your requirements)
router.get('/', getProducts);

module.exports = router;
