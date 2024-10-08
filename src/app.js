// src/app.js
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');

// Import Error Handler Middleware
const errorHandler = require('./middleware/errorHandler');

// Middleware Setup
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  optionsSuccessStatus: 200
}));

app.use(helmet());

app.use(express.json());

// Logging Middleware
app.use(morgan('combined'));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/deliveries', deliveryRoutes);

// Error Handling Middleware (should be after all routes)
app.use(errorHandler);

module.exports = app;
