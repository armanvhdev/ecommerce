import express from 'express';
const router = express.Router();

import { authRouter } from './authRoutes';
import { userRouter } from './userRoutes';

router.use('/auth',authRouter);
router.use('/users',userRouter)

export {router as routesHandler}