
import { deletePostById, findPostById } from '../reposotories/postRepository.js';
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

export const deltePostService = async(id,user)=>{
    // call the respsitory layer
    // with the id we have to make a db call to get the post 
    // now validate the username and email of the post with the user 
    // if validated then make them delete otherwise send the warning
    const post = await findPostById(id);
    if(!post){
        throw{
            status:404,
            message:"post Not Found"
        }
    }
    if(post.user != user){
        throw{
            status:401,
            message:"Unauthourised user"
        }
    }

        const deletedPost = await deletePostById(id);
        return deletedPost;
    

}