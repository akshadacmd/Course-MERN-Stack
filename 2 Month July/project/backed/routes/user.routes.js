const express = require("express");
const { getUserProfile, updateUserProfile, deleteUserProfile } = require("../controllers/user/user.controller");
const { verifyToken } = require("../utils/jwtFunctions");


const router = express.Router();

router.get('/getuserprofile' , verifyToken, getUserProfile)

router.put('/update-profile' , verifyToken, updateUserProfile)
router.delete('/delete-profile' , verifyToken, deleteUserProfile)

module.exports = router 