import { createUser } from "../reposotories/userRepository.js"

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