import express from 'express';

import * as userController from '@controllers/user';

export const userRouter = express.Router();

userRouter.post('/login', userController.postLogin);
userRouter.post('/forgot', userController.postForgot);
userRouter.post('/reset/:token', userController.postReset);
userRouter.post('/signup', userController.postSignup);
