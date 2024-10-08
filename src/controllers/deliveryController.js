// src/controllers/deliveryController.js
const { Delivery, Order, User } = require('../models');

const assignDelivery = async (req, res, next) => {
  const { orderId, deliveryPartnerId, pickupAddress, deliveryAddress } = req.body;
  try {
    if (req.user.role !== 'admin' && req.user.role !== 'inventory_manager') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const order = await Order.findByPk(orderId);
    if (!order) throw new Error('Order not found');

    const deliveryPartner = await User.findByPk(deliveryPartnerId);
    if (!deliveryPartner || deliveryPartner.role !== 'delivery_partner') {
      throw new Error('Invalid delivery partner');
    }

    const delivery = await Delivery.create({
      order_id: orderId,
      delivery_partner_id: deliveryPartnerId,
      pickup_address: pickupAddress,
      delivery_address: deliveryAddress,
      status: 'assigned',
    });

    order.status = 'confirmed';
    await order.save();

    res.status(201).json({ message: 'Delivery assigned successfully', delivery });
  } catch (error) {
    next(error); // Pass error to the error handler
  }
};

const updateDeliveryStatus = async (req, res, next) => {
  const { deliveryId, status } = req.body;
  try {
    if (req.user.role !== 'delivery_partner') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const delivery = await Delivery.findByPk(deliveryId);
    if (!delivery) throw new Error('Delivery not found');
    if (delivery.delivery_partner_id !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    delivery.status = status;
    await delivery.save();

    res.json({ message: 'Delivery status updated', delivery });
  } catch (error) {
    next(error); // Pass error to the error handler
  }
};
module.exports = {
    assignDelivery,
    updateDeliveryStatus,
}