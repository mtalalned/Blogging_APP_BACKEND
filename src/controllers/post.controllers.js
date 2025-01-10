import Post from '../models/post.models.js'


const addPost = async (req , res) => {
    const {title , content } = req.body
    const user = req.userID

    if(!user) return res.json({
        message: 'ID not received'
    })

    if(!title) return res.status(404).json({
        message: 'title required'
    })
    
    if(!content) return res.status(404).json({
        message: 'content required'
    })

    try {
        const createPost = await Post.create({
            title , content , user
        })    
        res.json({
            message: 'Post created',
            createPost 
        })
    } catch(error) {
        res.json({
            message: 'error in creating Post',
            error
        })
    }
}


const getPost = async (req , res) => {
    try {
        const getAllPosts = await Post.find()
        .populate('user' , 'username')
        .populate('likes' , 'username')
        .populate('comments')
    
        res.json({
            message: 'All posts obtained',
            getAllPosts
        })
    } catch (error) {
        res.json({
            message: 'error in getting all Posts',
            error
        })
    }
}

export {getPost , addPost}