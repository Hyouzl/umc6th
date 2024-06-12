import express from 'express';
import asyncHandler from 'express-async-handler';
import { newMission } from '../controllers/store.controller.js';
import { newReview } from '../controllers/user.controller.js';

export const storeRouter = express.Router();

storeRouter.post('/mission', asyncHandler(newMission));
storeRouter.post('/review', asyncHandler(newReview));