// src/controllers/productController.js
const { Delivery, Order, User, Inventory, DarkStore, OrderItem, Product, sequelize } = require('../models');

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    if (req.user.role !== 'vendor') {
      return res.status(403).json({ error: 'Only vendors can add products' });
    }
    const product = await Product.create({
      name,
      description,
      price,
      vendor_id: req.user.id,
    });
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: User, as: 'vendor', attributes: ['id', 'name'] }],
    });
    res.json({ products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
    addProduct,
    getProducts,
}