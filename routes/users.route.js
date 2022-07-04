const express = require("express");
const { users } = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", users);

module.exports = router;