// src/models/DarkStore.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DarkStore = sequelize.define(
  'DarkStore',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
  },
  {
    timestamps: true,
  }
);

module.exports = DarkStore;
