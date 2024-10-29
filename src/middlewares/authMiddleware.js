
import { doesUserExists} from "../services/userService.js";
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async(req,res,next)=>{
    // check if the token is passed in the header
    const token = req.headers["x-access-token"];// x-access-token is the name 
    if(!token){
        return res.status(400).json({
            success:false,
            message:"token is required",
        }); 
    }
    // verify the token
    try{
        const response = verifyToken(token);
        // here some catch is there if the user signed in and leaked the jwt token and deleted his account so now the user can user our services using this token 
        console.log("response object form the jwt ");
        console.log(response);
        // now also check if the user exists in the db or not

        const doesUserExist = await doesUserExists(response.email);
        if(!doesUserExist){
            return res.status(404).json({
                success:false,
                message:"user not found"
            });
        }

        req.user = response;// we have attached the user object to the req body which contains the response from the token

        next();

    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid token"
        });
    }
}