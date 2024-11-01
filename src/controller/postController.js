import { createPostService, deltePostService, getAllPostsService } from "../services/postService.js";


export async function createPost(req, res){
    console.log(req.file);// req.file.location

    // res.send({
    //     message: " post created successfully",
    // }); 
    // call the service layer

    const post = await createPostService({
        caption:req.body.caption,
        image:req.file.location,
        userId : req.user._id,
    })
    
    
    return res.status(201).json({
        success:true,
        message:"Post created successfully",
        data:post
    });
}

export async function getAllPosts(req,res){
    // from here we will call the service layer 
    try{
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;

        const paginatedPosts = await getAllPostsService(offset, limit);
        return res.status(200).json({
            success: true,
            message:"all posts fetched successfully",
            data:paginatedPosts,
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

export async function deletePost(req,res){
        try{
            // console.log("dele/te method hited");
            const postId = req.params.id;
            console.log(req.user._id);
            const response = await deltePostService(postId,req.user._id);
            if(!response){
                res.status(404).json({
                    success:true,
                    message:"post not found"
                });
            }
            return res.status(200).json({
                success:true,
                message:"post deleted successfully",
                data:response
            })
        }catch(error){
            if(error.status){// this means that error is already having a status key this means it is a custom error generated by us
                return res.status(error.status).json({
                    success:false,
                    message:error.message,
                })
            }
            console.log(error);
            res.status(500).json({
                success:false,
                message:"internal server error",
            })
        }
}


