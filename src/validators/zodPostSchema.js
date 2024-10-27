import {z} from 'zod';
export const zodPostSchema = z.object({// in here we are creating our schema or the object for the post 
    caption:z.string({message:"caption is required"}).min(1),// inside the object we are mentioning the things that we want to validate like 
    // cation should be string and min length of 1 like this many more thing can be done 
    // read the zod doc.
})