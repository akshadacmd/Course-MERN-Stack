const express = require("express");
const router = express.Router(); 
const {
  loginUser,
  registerUser,
  forgotPassword,
  birthdayAdd,
  resetPassword,
  changePassword,
} = require("../controllers/auth/auth.controller");

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/birthday-add', birthdayAdd);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/change-password', changePassword);

module.exports = router;
