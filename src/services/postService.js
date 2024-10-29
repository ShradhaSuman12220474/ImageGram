
import { deletePostById } from '../reposotories/postRepository.js';
import { countAllPosts, createPost, findAllPosts } from "../reposotories/postRepository.js";


export const createPostService = async(createPostObject)=>{
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    const userId = createPostObject.userId; //add later
    const post = createPost(caption, image,userId);
    return post;
}

export const getAllPostsService = async(offset, limit)=>{
    const post = await findAllPosts(offset, limit);
    const totalDocuments = await countAllPosts();
    const pages = Math.ceil(totalDocuments/limit);
    return {
        post,pages,totalDocuments
    }

}

export const deltePostService = async(id)=>{
    // call the respsitory layer
    const deletedPost = await deletePostById(id);
    return deletedPost;

}