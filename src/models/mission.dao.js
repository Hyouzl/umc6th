import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertMemberMission, insertMission } from "./mission.query.js";

export const addMission = async(missionDTO) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(insertMission, [missionDTO.storeId, missionDTO.reward, missionDTO.deadline, missionDTO.missionSpec]);
        conn.release();

        return result;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const addMemberMission = async(memberMissionDTO) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(insertMemberMission, [memberMissionDTO.memberId, memberMissionDTO.missionId, memberMissionDTO.status]);
        conn.release();
        return result;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}