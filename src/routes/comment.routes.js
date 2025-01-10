import express from 'express'
import addComment from '../controllers/comment.controllers.js'
import authenticateUser from '../middleware/authenticate.middleware.js'

const router = express.Router()

router.post('/comment' , authenticateUser, addComment)

export default router