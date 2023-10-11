const { Router } = require("express");
const { users } = require("../controllers/adminPanelController/users");

const router = Router();

// Route for all users in adminPanel
router.get("/users", users);

module.exports = router;