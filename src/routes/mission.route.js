import express from 'express';
import asyncHandler from 'express-async-handler';
import { newMemberMission } from '../controllers/mission.controller.js';


export const missionRouter = express.Router();

missionRouter.get('/member-mission', asyncHandler(newMemberMission));