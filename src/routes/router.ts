import express from 'express';
const router = express.Router();

import { authRouter } from './authRoutes';

router.use('/auth',authRouter);

export {router as routesHandler}