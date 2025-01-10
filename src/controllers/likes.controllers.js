import Like from '../models/like.models.js';
import Post from '../models/post.models.js';

const likePost = async (req, res) => {
  const { postID } = req.body;

  try {
    const existlike = await Like.findOne({ user: req.userID, post: postID });
    if (existlike) {
      return res.status(400).json({ message: 'You have already liked this post' });
    }

    const like = await Like.create({ user: req.userID, post: postID });

    const post = await Post.findByIdAndUpdate(
      postID,
      { $push: { likes: req.userID } },
      { new: true } 
    );

    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {likePost}