import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertMemberMission, insertMission, confirmStore, getMission } from "./mission.query.js";

export const addMission = async(missionDTO) => {
    try {
        const conn = await pool.getConnection();

        console.log(missionDTO);
        // 존재하는 가게인지 확인
        const [confirm1] = await pool.query(confirmStore, missionDTO.store_id);
    
        console.log(confirm1);
    
        // 존재하지않으면..
        if(!confirm1[0].isExistStore) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertMission, [missionDTO.store_id, missionDTO.reward, missionDTO.deadline, missionDTO.mission_spec]);
        conn.release();

        return result[0].insertId;
    } catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const addMemberMission = async(memberMissionDTO) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(insertMemberMission, [memberMissionDTO.member_id, memberMissionDTO.mission_id, memberMissionDTO.status]);
        conn.release();
        return result;

    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getStoreMission = async(missionId) => {
    try {
        const conn = await pool.getConnection();
        const storeMission = await pool.query(getMission, missionId);

        console.log("response mission: ", storeMission);
        
        if(storeMission.length === 0){
            return -1;
        }    

        conn.release();
        return storeMission;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

