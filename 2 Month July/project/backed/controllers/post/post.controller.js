// 1. /api/posts/create         ==> POST
// 2. /api/posts/delete         ==> DELETE
// 3. /api/posts/edit           ==> PUT
// 4. /api/posts/feed           ==> GET
// 5. /api/posts/:userId        ==> GET

const Post = require("../../models/post/post.model");

const createPost = async (req, res) => {
  try {
    const { description, location, active } = req.body;
    
    const userId = req.user.userId;

    const newPost = new Post({
      description,
      location,
      active,
      userId,
    });

    await newPost.save();

    res.status(201).json({
      post: newPost,
      message: "Post is created",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllPost = async (req, res) => {
  try {

    const allPostData = await Post.find();

    res.status(201).json({
      message: "Get all Post Data",
      allPostData: allPostData,
    });

  } catch (error) {
    console.log(error);
  }
};


const getMyPost = async (req, res) => {
  try {
   
    const userId = req.user.userId;

    const postsData = await Post.find({userId})


    res.status(200).json({
      messgae : "Get All My posts",
      myPostData : postsData
    })

  } catch (error) {
    console.log(error.message)
  }
};

const updateMyPost = async (req, res) => {
  try {
    const { postId, description, location } = req.body;
    const updateMyPost = await Post.findByIdAndUpdate(
      postId,
      {
        description,
         location
      },
      {
        new: true,
      }
    );
    res.json({
      message: "Post Updated",
      userData: updateMyPost,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteMyPost = async (req, res) => {
  try {
    const { postId } = req.body;

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createPost,
  getAllPost,
  getMyPost,
  updateMyPost,
  deleteMyPost
};