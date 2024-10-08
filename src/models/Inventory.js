// src/models/Inventory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const Product = require('./Product');
// const DarkStore = require('./DarkStore');

const Inventory = sequelize.define(
  'Inventory',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: true,
  }
);
module.exports = Inventory;
// // Associations
// Inventory.belongsTo(Product, { foreignKey: 'product_id' });
// Product.hasMany(Inventory, { foreignKey: 'product_id' });

// Inventory.belongsTo(DarkStore, { foreignKey: 'dark_store_id' });
// DarkStore.hasMany(Inventory, { foreignKey: 'dark_store_id' });


