// src/models/OrderItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const Order = require('./Order');
// const Product = require('./Product');

const OrderItem = sequelize.define(
  'OrderItem',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
    total_price: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: true,
  }
);

// Associations
// OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
// Order.hasMany(OrderItem, { foreignKey: 'order_id' });

// OrderItem.belongsTo(Product, { foreignKey: 'product_id' });
// Product.hasMany(OrderItem, { foreignKey: 'product_id' });

module.exports = OrderItem;
