// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const {login,register} = require('../controllers/authController');
const { body } = require('express-validator');

// Register Route with Validation
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('role').isIn(['restaurant_owner', 'vendor', 'delivery_partner', 'inventory_manager', 'admin']).withMessage('Invalid role'),
  ],
  register
);

// Login Route with Validation
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

module.exports = router;
