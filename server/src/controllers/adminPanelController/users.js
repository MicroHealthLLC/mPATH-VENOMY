const User = require("../../database/schemas/User");

// Function for retrieving all users
const users = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    res.json(users);
    console.log(users + "HI");
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

module.exports = {
  users,
};