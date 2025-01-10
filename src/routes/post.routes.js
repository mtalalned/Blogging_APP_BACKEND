import express from 'express'
import { getPost , addPost } from '../controllers/post.controllers.js'
import authenticateUser from '../middleware/authenticate.middleware.js'

const router = express.Router()

router.post('/post' , authenticateUser, addPost)
router.get('/post' , authenticateUser , getPost)

export default router