// src/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Determine the status code
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
    res.status(statusCode).json({
      error: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;
  