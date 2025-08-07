const express = require("express");
const { createPost, getAllPost, getMyPost, deleteMyPost, updateMyPost } = require("../controllers/post/post.controller");
const { verifyToken } = require("../utils/jwtFunctions");

const router = express.Router();

router.post('/create-post' , verifyToken ,  createPost)
router.get('/get-all-post' , verifyToken , getAllPost )
router.get('/get-my-post' , verifyToken , getMyPost )
router.put(' /update-My-Post' , verifyToken, updateMyPost)
router.delete('/delete-my-post' , verifyToken , deleteMyPost )

module.exports = router  