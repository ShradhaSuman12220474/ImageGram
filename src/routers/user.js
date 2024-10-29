import express from 'express';
import {getuserProfile, signIn, signUp} from '../controller/userController.js';
import { validate } from '../validators/zodValidators.js';
import { zodSignUpSchema } from '../validators/zodSignUpSchema.js';
import { zodSignInSchema } from '../validators/zodSignInSchema.js';
const router = express.Router();


router.get('/profile',getuserProfile);
router.post('/signUp',validate(zodSignUpSchema),signUp);
router.post('/signIn',validate(zodSignInSchema),signIn);


export default router;