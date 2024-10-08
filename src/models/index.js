// src/models/index.js
const sequelize = require('../config/db');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const Delivery = require('./Delivery');
const Inventory = require('./Inventory');
const DarkStore = require('./DarkStore');

// Define Associations

// User Associations
User.hasMany(Product, { as: 'products', foreignKey: 'vendor_id' });
Product.belongsTo(User, { as: 'vendor', foreignKey: 'vendor_id' });

User.hasMany(Order, { as: 'orders', foreignKey: 'user_id' });
Order.belongsTo(User, { as: 'user', foreignKey: 'user_id' });

User.hasMany(Delivery, { as: 'deliveries', foreignKey: 'delivery_partner_id' });
Delivery.belongsTo(User, { as: 'delivery_partner', foreignKey: 'delivery_partner_id' });

// Order and Delivery Associations
Order.hasOne(Delivery, { foreignKey: 'order_id' });
Delivery.belongsTo(Order, { foreignKey: 'order_id' });

// Order and OrderItem Associations
Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

// Inventory and Product Associations
Product.hasMany(Inventory, { foreignKey: 'product_id' });
Inventory.belongsTo(Product, { foreignKey: 'product_id' });

// Inventory and DarkStore Associations
DarkStore.hasMany(Inventory, { foreignKey: 'dark_store_id' });
Inventory.belongsTo(DarkStore, { foreignKey: 'dark_store_id' });

module.exports = {
  User,
  Product,
  Order,
  OrderItem,
  Delivery,
  Inventory,
  DarkStore,
  sequelize,
};
