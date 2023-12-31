require('dotenv').config();
// sync-database.js
const sequelize = require('./db');
const User = require('./schemas/User');
const Program = require('./schemas/Program');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } to drop existing tables and recreate them
    console.log('Tables synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  } finally {
    // Close the database connection when synchronization is complete
    await sequelize.close();
  }
}

// Call the syncDatabase function to run the synchronization once
syncDatabase();