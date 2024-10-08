// src/controllers/authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
  const { name, email, password, phone_number, address, role } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('User already exists with this email');

    const password_hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password_hash,
      phone_number,
      address,
      role,
    });
    res.status(201).json({ message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error('User not found');
      const valid = await bcrypt.compare(password, user.password_hash);
      if (!valid) throw new Error('Invalid password');
  
      console.log('User role:', user.role); // Add this line for debugging
  
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
module.exports = {
    register,
    login,
};