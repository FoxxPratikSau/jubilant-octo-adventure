// src/models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const User = require('./User');

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: true,
  }
);

// Association
// Product.belongsTo(User, { as: 'vendor', foreignKey: 'vendor_id' });
// User.hasMany(Product, { as: 'products', foreignKey: 'vendor_id' });

module.exports = Product;
