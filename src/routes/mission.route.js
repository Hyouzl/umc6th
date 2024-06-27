import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMyMissions } from '../provider/member-mission.provider.js';
import { getStoreMission } from '../models/mission.dao.js';

export const missionRouter = express.Router({mergeParams: true});

missionRouter.get("/:memberId", asyncHandler(getMyMissions));
missionRouter.get("/:storeId", asyncHandler(getStoreMission));