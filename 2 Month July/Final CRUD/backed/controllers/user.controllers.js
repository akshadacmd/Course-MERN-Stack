const User = require("../models/user.models");

const createUser = async (req, res) => {
  try {
    const { name, email, mobileNo, age } = req.body;

    const userData = await User({
      name,
      email,
      mobileNo,
      age,
    });
    await userData.save();

    res.status(201).json({ data: userData, message: "Created User" });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUserData = await User.find();
    res.status(201).json({ data: allUserData, message: "Get All Users Data" });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body;

    await User.findByIdAndDelete({ _id: userId });
    res.status(201).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    res.status(201).json({ message: "We are workign on This API" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
};