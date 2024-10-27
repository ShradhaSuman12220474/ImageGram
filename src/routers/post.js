// int the router url we mention the remaining url
import express from "express";
import { s3uploader } from "../config/multerConfig.js";
import { createPost } from "../controller/postController.js";
import  {getAllPosts}  from "../controller/postController.js";
import {deletePost} from '../controller/postController.js';
const router = express.Router();// router object to modelurize the routes

router.post('/',s3uploader.single('image'),createPost);

router.get('/',getAllPosts);

router.delete('/:id',deletePost);



export default router;
