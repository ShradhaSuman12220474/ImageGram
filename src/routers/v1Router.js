import express from 'express';
import postRouter from './post.js';

import userRouter from './user.js';

const router = express.Router();

router.use('/posts',postRouter);
router.use('/users',userRouter);

export default router;