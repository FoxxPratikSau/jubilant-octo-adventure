// src/controllers/orderController.js
const { Order, OrderItem, Product, sequelize } = require('../models');

exports.placeOrder = async (req, res, next) => {
  const { items } = req.body; // Array of { productId, quantity }
  const t = await sequelize.transaction();
  try {
    let totalAmount = 0;
    const orderItemsData = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        if (!product) throw new Error('Product not found');
        const totalPrice = parseFloat(product.price) * item.quantity;
        totalAmount += totalPrice;
        return {
          product_id: product.id,
          quantity: item.quantity,
          price: product.price,
          total_price: totalPrice,
        };
      })
    );
    const order = await Order.create(
      {
        user_id: req.user.id,
        status: 'pending',
        total_amount: totalAmount,
      },
      { transaction: t }
    );
    await Promise.all(
      orderItemsData.map((item) => {
        item.order_id = order.id;
        return OrderItem.create(item, { transaction: t });
      })
    );
    await t.commit();
    res.status(201).json({ message: 'Order placed successfully', orderId: order.id });
  } catch (error) {
    await t.rollback();
    next(error); // Pass error to the error handler
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { user_id: req.user.id },
      include: [{ model: OrderItem, include: [Product] }],
    });
    res.json({ orders });
  } catch (error) {
    next(error); // Pass error to the error handler
  }
};
