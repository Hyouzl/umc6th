import express from 'express';
import asyncHandler from 'express-async-handler';
import { newMission,reviewPreview } from '../controllers/store.controller.js';
import { newReview } from '../controllers/member.controller.js';

export const storeRouter = express.Router({mergeParams: true});

storeRouter.post('/mission', asyncHandler(newMission));
storeRouter.post('/review', asyncHandler(newReview));
storeRouter.get('/reviews', asyncHandler(reviewPreview));
