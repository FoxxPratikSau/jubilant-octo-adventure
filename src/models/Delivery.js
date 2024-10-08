// // src/models/Delivery.js
// src/models/Delivery.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Delivery = sequelize.define(
  'Delivery',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pickup_address: DataTypes.TEXT,
    delivery_address: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ['assigned', 'in_transit', 'delivered', 'failed'],
      defaultValue: 'assigned',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Delivery;

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');
// const Order = require('./Order');
// const User = require('./User');

// const Delivery = sequelize.define(
//   'Delivery',
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     pickup_address: DataTypes.TEXT,
//     delivery_address: DataTypes.TEXT,
//     status: {
//       type: DataTypes.ENUM,
//       values: ['assigned', 'in_transit', 'delivered', 'failed'],
//       defaultValue: 'assigned',
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Associations
// Delivery.belongsTo(Order, { foreignKey: 'order_id' });
// Order.hasOne(Delivery, { foreignKey: 'order_id' });

// Delivery.belongsTo(User, { as: 'delivery_partner', foreignKey: 'delivery_partner_id' });
// User.hasMany(Delivery, { as: 'deliveries', foreignKey: 'delivery_partner_id' });

// module.exports = Delivery;
