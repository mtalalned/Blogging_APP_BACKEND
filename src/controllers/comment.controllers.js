import Comment from '../models/comment.models.js'
import Post from '../models/post.models.js'

const addComment = async (req , res) => {
    
    const {postID , text} = req.body
    
    if (!postID) return res.json({
        message: 'post ID is required'
    })
    if (!text) return res.json({
        message: 'text is required'
    })

    try {
        const commentCreation = await Comment.create({
            post: postID , user: req.userID , text
        }) 
        const commentPush = await Post.findByIdAndUpdate(
            postID, 
            {$push: {comments: commentCreation._id}},
        )

    res.status(201).json(commentCreation);
} catch (error) {
  res.status(400).json({ error: error.message });
}
};

export default addComment