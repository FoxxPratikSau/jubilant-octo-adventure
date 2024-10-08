// src/models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const User = require('./User');

const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'confirmed', 'dispatched', 'delivered', 'cancelled'],
      defaultValue: 'pending',
    },
    total_amount: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: true,
  }
);

// // Association
// Order.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
// User.hasMany(Order, { as: 'orders', foreignKey: 'user_id' });

module.exports = Order;
