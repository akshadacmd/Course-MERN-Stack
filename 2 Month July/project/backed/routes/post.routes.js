const express = require("express");
const { createPost } = require("../controllers/post/post.controller");
const { verifyToken } = require("../utils/jwtFunctions");
const router = express.Router(); 
router.post('/create-post',  verifyToken, createPost);
module.exports = router;