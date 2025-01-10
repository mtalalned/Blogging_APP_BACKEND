import express from 'express';
import { likePost } from '../controllers/likes.controllers.js';
import authenticateUser from '../middleware/authenticate.middleware.js';

const router = express.Router();

router.post('/like', authenticateUser, likePost);

export default router;