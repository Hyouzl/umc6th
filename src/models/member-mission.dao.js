import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"
import { getMyMissionByMemberId, getMyMissionByMemberIdAtFirst } from "./member-mission.query.js";

export const getPreviewMyMission = async(cursorId, size, memberId) => {
    try {
        const conn = await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            cosnt [missions] = await pool.query(getMyMissionByMemberIdAtFirst, [parseInt(memberId), parseInt(size)]);
            
            conn.release();
            return missions;

        } else {
            cosnt [missions] = await pool.query(getMyMissionByMemberId, [parseInt(memberId), parseInt(cursorId), parseInt(size)]);
            
            conn.release();
            return missions;
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}