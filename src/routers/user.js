import express from 'express';
import {getuserProfile, signUp} from '../controller/userController.js';
import { validate } from '../validators/zodValidators.js';
import { zodSignUpSchema } from '../validators/zodSignUpSchema.js';
const router = express.Router();


router.get('/profile',getuserProfile);
router.post('/signUp',validate(zodSignUpSchema),signUp);


export default router;