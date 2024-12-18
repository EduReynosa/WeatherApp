const express = require("express");
const { login, register, resetPassword } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/reset-password", resetPassword);

module.exports = router;
