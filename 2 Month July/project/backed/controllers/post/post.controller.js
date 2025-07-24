const Post = require("../../models/post/post.model");

const createPost = async (req, res) => {
  try {
    const { description, location, active } = req.body;
    const userId = req.user.id;

    const newPost = new Post({
      description,
      location,
      active,
      userId
    });

    await newPost.save();

    res.status(201).json({
      post: newPost,
      message: "Post is created"
    });

  } catch (error) {
    console.log(error);
  }
};
module.exports ={
    createPost 
}