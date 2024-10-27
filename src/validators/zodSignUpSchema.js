import {z} from 'zod';

export const zodSignUpSchema = z.object({
    username: z.string().min(5),
    email:z.string().email(),
    password: z.string().min(5),
});