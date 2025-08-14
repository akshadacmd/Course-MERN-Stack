// 1. /api/auth/register        ==> POST
// 2. /api/auth/login           ==> POST
// 2. /api/auth/birthday           ==> POST
// 3. /api/auth/forgot-password ==> POST
// 4. /api/auth/reset-password  ==> POST
// 5. /api/auth/change-password ==> POST


const User = require("../../models/user/user.model");
const { generateToken } = require("../../utils/jwtFunctions");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akshadapatil118@gmail.com",
    pass: "kjhc ldgd fxna rvnd",
  },
});

let otpStore = {};

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User({ userName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ user: newUser, message: "User Registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(404).json({ Message: "User Not Found in Db" });
    }
    const isPasswordTrue = await bcrypt.compare(password, userData.password);
    if (!isPasswordTrue) {
      return res.status(401).json({ message: "Password Is Wrong" });
    }
    const token = generateToken(userData._id);
    res.status(200).json({ message: "Login Successful", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(404).json({ Message: "User Not Found in Db" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    };
    await transporter.sendMail({
      from: "akshadapatil118@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp} `,
    });
    console.log(otp, "otp");
    return res.status(200).json({ Message: "OTP Sent to Email" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Something went wrong" });
  }
};

const verifyOpt = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!otpStore[email]) {
      return res.status(400).json({ Message: "No OTP found for this email" });
    }
    const { otp: storedOtp, expiresAt } = otpStore[email];
    if (Date.now() > expiresAt) {
      delete otpStore[email];
      return res.status(400).json({ Message: "OTP has expired" });
    }
    if (parseInt(otp) !== storedOtp) {
      return res.status(400).json({ Message: "Invalid OTP" });
    }
    delete otpStore[email];
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(404).json({ Message: "User Not Found in Db" });
    }
    const token = generateToken(userData._id);
    return res.status(200).json({
      message: "OTP verified successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Something went wrong" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    let decode;
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token:", decode);
    } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

   const userData = await User.findById(decode.id);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    userData.password = hashedPassword;
    userData.resetOtp = null;
    userData.resetOtpExpiration = null;
    userData.otpSentCount = 0;

    await userData.save();
    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Server error during password reset" });
  }
};

const changePassword = async (req, res) => {
  try {
    console.log("change-password API called");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginUser,
  registerUser,
  forgotPassword,
  verifyOpt,
  resetPassword,
  changePassword,
};
