// 1. /api/auth/register        ==> POST
// 2. /api/auth/login           ==> POST
// 2. /api/auth/birthday           ==> POST
// 3. /api/auth/forgot-password ==> POST
// 4. /api/auth/reset-password  ==> POST
// 5. /api/auth/change-password ==> POST

const User = require("../../models/user/user.model");
const { generateToken } = require("../../utils/jwtFunctions");

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const newUser = await User({ userName, email, password });

    await newUser.save();

    res
      .status(201)
      .json({ user: newUser, message: "User Registered successfully" });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({ email });
    if (userData.password == password) {
      const token = generateToken(userData._id);
      res.status(200).json({ message: "Login Successful", token: token });
    } else {
      res.status(500).json({ message: "Login Failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

const birthdayAdd = async (req, res) => {
  try {
    console.log("Register API called");
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (req, res) => {
  try {
    console.log("forgot-password API called");
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    console.log("forgot-password API called");
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (req, res) => {
  try {
    console.log("forgot-password API called");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
  changePassword,
  birthdayAdd,
};
 
