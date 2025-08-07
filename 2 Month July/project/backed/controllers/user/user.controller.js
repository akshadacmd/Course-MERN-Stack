const User = require("../../models/user/user.model");

const getUserProfile = async (req, res) => {
  try {
    console.log(req.user.userId, "User-Id");

    const userData = await User.findById(req.user.userId);

    res.status(201).json({ message: "Get User successfully", userData });
    
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ message: "Server error during profile retrieval" });
  }
};
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { fullName, userName, mobileNo } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        fullName,
        userName,
        mobileNo,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User Updated",
      userData: updateUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
     const userId = req.user.userId;
     const deleteUser = await User.findByIdAndDelete(userId)
     res.status(200).json({message : "User deleted Profile" })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile
};