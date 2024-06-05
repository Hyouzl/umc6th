import express from 'express';
import asyncHandler from 'express-async-handler';
import { newMemberMission, newMission } from '../controllers/mission.controller.js';


export const missionRouter = express.Router();
/**
 * @swagger
 * /mission/add-mission:
 *   post:
 *     tags:
 *       - Mission
 *     summary: Add a new mission
 *     description: Add a new mission to the store
 *     parameters:
 *       - in: query
 *         name: storeId
 *         schema:
 *           type: integer
 *         description: The ID of the store
 *         example: 1
 *       - in: query
 *         name: reward
 *         schema:
 *           type: integer
 *         description: The reward for the mission
 *         example: 100
 *       - in: query
 *         name: deadline
 *         schema:
 *           type: string
 *           format: date-time
 *         description: The deadline of the mission
 *         example: 2024-12-31T23:59:59.999Z
 *       - in: query
 *         name: missionSpec
 *         schema:
 *           type: string
 *         description: The specification of the mission
 *         example: Sample mission spec
 *     responses:
 *       201:
 *         description: Mission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mission created successfully
 *                 result:
 *                   type: object
 *                   example: { "id": 1, "store_id": 1, "reward": 100, "deadline": "2023-12-31T23:59:59.999Z", "mission_spec": "Sample mission spec", "created_at": "2023-06-01T00:00:00.000Z", "updated_at": "2023-06-01T00:00:00.000Z" }
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 500
 *                 isSuccess:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: string
 *                   example: COMMON000
 *                 message:
 *                   type: string
 *                   example: 서버 에러, 관리자에게 문의 바랍니다
 */

/**
 * @swagger
 * /mission/member-mission:
 *   post:
 *     tags:
 *       - MemberMission
 *     summary: Add a new member mission
 *     description: Add a new mission for a member
 *     parameters:
 *       - in: query
 *         name: memberId
 *         schema:
 *           type: integer
 *         description: The ID of the member
 *         example: 1
 *       - in: query
 *         name: missionId
 *         schema:
 *           type: integer
 *         description: The ID of the mission
 *         example: 1
 *     responses:
 *       201:
 *         description: Member mission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Member mission created successfully
 *                 result:
 *                   type: object
 *                   example: { "id": 1, "member_id": 1, "mission_id": 1, "status": "ing", "created_at": "2023-06-01T00:00:00.000Z", "updated_at": "2023-06-01T00:00:00.000Z" }
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 500
 *                 isSuccess:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: string
 *                   example: COMMON000
 *                 message:
 *                   type: string
 *                   example: 서버 에러, 관리자에게 문의 바랍니다
 */



missionRouter.get('/add-mission', asyncHandler(newMission));
missionRouter.get('/member-mission', asyncHandler(newMemberMission));