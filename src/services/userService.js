import { createUser, findUserByEmail } from "../reposotories/userRepository.js"
import bcrypt from 'bcrypt';
import { generateJwtToken } from "../utils/jwt.js";

export const signUpUserService = async (user)=>{
    try{
        const newUser = await createUser(user);
        return newUser;
    }
    
    catch(error){
        
        console.log("service layer");
        console.log("error name",error.name);
        console.log("error code",error.code);
        if(error.name === 'MongoServerError' && error.code === 11000){
            throw {
                status:400,
                message:"User with the same username or email already exists",
            }
        }
        else throw error;
    }
}

export const signInUserService = async (userDetails)=>{
    try{
    // check if the user already exits or not
        const user = await findUserByEmail(userDetails.email);
        if(!user){
            throw{
                status:404,
                message:"User not found"
            }
        }

        // now compare the password
        const isPasswordValid = bcrypt.compareSync(userDetails.password,user.password);

        if(!isPasswordValid){
            throw{
                status:401,
                message:"invalid password",
            }
        }
        // now generate the token and send it
        const token = generateJwtToken({email:user.email,_id:user._id,username:user.username});
        return token;

    }
    catch(error){
        throw error;
    }

}

export const doesUserExists = async (email)=>{
    try{
        const user = await findUserByEmail(email);
        return user;
    }
    catch(error){
        throw error;
    }
}