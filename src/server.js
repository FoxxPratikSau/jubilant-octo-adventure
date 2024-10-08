// src/server.js
const app = require('./app');
const { sequelize } = require('./models'); // Import sequelize instance from models/index.js
require('dotenv').config();

const PORT = process.env.PORT || 5001;
// At the top of your server.js file
require('dotenv').config();
console.log('Environment variables loaded:');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
// Don't log DB_PASSWORD for security reasons

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');

    // Sync all models
    await sequelize.sync({ alter: true }); // { alter: true } updates the tables to match models
    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
