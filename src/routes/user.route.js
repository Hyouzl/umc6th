import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin } from "../controllers/user.controller.js";
import { newMemberMission } from "../controllers/mission.controller.js";


export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(newMemberMission));