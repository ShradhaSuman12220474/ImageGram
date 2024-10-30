// int the router url we mention the remaining url
import express from "express";
import { s3uploader } from "../../config/multerConfig.js";
import { createPost } from "../../controller/postController.js";
import  {getAllPosts}  from "../../controller/postController.js";
import {deletePost} from '../../controller/postController.js';
import { isAuthenticated } from "../../middlewares/authMiddleware.js";
const router = express.Router();// router object to modelurize the routes

/**
 * @swagger
 * /posts:
 *  post:
 *     summary:create a new post
 *     description:Registered user can create their post
 */
router.post('/',isAuthenticated,s3uploader.single('image'),createPost);

router.get('/',getAllPosts);

router.delete('/:id',isAuthenticated,deletePost);



export default router;
