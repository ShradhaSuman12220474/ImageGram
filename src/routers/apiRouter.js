import express from 'express';
// import postRouter from './post.js';
// import userRouter from './user.js';
import v1Router from './v1Router.js';

const router = express.Router();


router.use('/v1',v1Router);

// router.use('/posts',postRouter);

// router.use('/users',userRouter);

export default  router;