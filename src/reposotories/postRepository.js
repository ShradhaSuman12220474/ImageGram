// In this repository layer all the db calls will be done using odm/orm that is mongoose

import Post from '../schema/post.js'



export const createPost = async(caption,image,userId)=>{
    try{
        
        const newPost = await Post.create({caption,image,user:userId});// this is going to crete a new object in the collection of Post
        return newPost;
    
    }
    catch(error){
        console.log(error);
    }
}

// finding all the post from the db call

export const findAllPosts = async(offset, limit)=>{
    try{
        const posts = await Post.find().sort({createdAt:-1}).skip(offset).limit(limit);
        return posts;

    }
    catch(error){
        console.log(error);
    }
}

// findig the total count of the document in dp
export const countAllPosts = async()=>{
    try{
        const totalPost = await Post.countDocuments();
        return totalPost;
    }
    catch(error){
        console.log(error);
    }
}

// finding the post by the id

export const findPostById = async(id)=>{
    try{
        const posts = await Post.findById(id);
        return posts;
    }
    catch(error){
        console.log(error);
    }   
}

// deleting the post

export const deletePostById = async(id)=>{
    try{
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
    catch(error){
        console.log(error);
    }
}