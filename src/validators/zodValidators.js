export const validate = (schema) =>{// this is a common middleware which will help us to validate 
    // schema is the object that is comming from the zod validators itself which will contains all the revelant details like the res, req,and the next();
    return async (req,res,next)=>{
        console.log("from validate of zod");
        try{
            console.log("req body")
            console.log(req.body);
            schema.parse(req.body);// in here we are parsing the body and validating the body.
            next();// then we are moving to the next middleware
        }
        catch(error){
            return res.status(400).json({
                success:false,
                message:"validation error",
                errors:error.errors,
            });
        }
    }
}