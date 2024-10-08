// src/models/User.js
// src/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password_hash: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.TEXT,
    role: {
      type: DataTypes.ENUM,
      values: ['restaurant_owner', 'vendor', 'delivery_partner', 'inventory_manager', 'admin'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   name: DataTypes.STRING,
//   email: { type: DataTypes.STRING, unique: true },
//   password_hash: DataTypes.STRING,
//   phone_number: DataTypes.STRING,
//   address: DataTypes.TEXT,
//   role: {
//     type: DataTypes.ENUM,
//     values: ['restaurant_owner', 'vendor', 'delivery_partner', 'inventory_manager', 'admin'],
//   },
// }, {
//   timestamps: true,
// });

// module.exports = User;


