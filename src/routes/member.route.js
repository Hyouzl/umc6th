import express from "express";
import asyncHandler from 'express-async-handler';
import { memberSignin, myReviews } from "../controllers/member.controller.js";
import { newMemberMission } from "../controllers/mission.controller.js";


export const memberRouter = express.Router({mergeParams: true});

memberRouter.post('/signin', asyncHandler(memberSignin));
memberRouter.post('/mission', asyncHandler(newMemberMission));
memberRouter.get('/reviews', asyncHandler(myReviews));
memberRouter.get('/missions')
