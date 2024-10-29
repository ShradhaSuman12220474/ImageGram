import {z} from 'zod';

export const zodSignInSchema = z.object({
    email:z.string().email(),
    password:z.string().min(5),
});