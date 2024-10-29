import express from 'express';
import connectDB from './config/dbConfig.js';

import apiRouter from './routers/apiRouter.js';

import { isAuthenticated } from './middlewares/authMiddleware.js';
const PORT = 3000;

const app = express();// create a express app server instance


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping',isAuthenticated,(req,res)=>{
    console.log(req.user);
    return res.json({message : "Pong"})
});

app.listen(PORT,()=>{
    console.log("server is up");
    connectDB();
});

app.use('/api',apiRouter);

// app.use('/posts', postRouter);

// app.use('/getPosts', postRouter);

// app.use('/user',userRouter);

// api to post the image
// app.post('/posts',s3uploader.single('image'),createPost)

// app.get('/getPosts',getAllPosts);
