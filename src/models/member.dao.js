import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confirmEmail, confirmMember, connectFoodCategory, insertReview, insertMemberSql, getMemberID, getPreferToMemberId } from "./member.sql.js";

export const addMember = async (data) => {

    try{
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmEmail, data.email);

        if(confirm[0].isExistEmail) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertMemberSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);
        
        conn.release;
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

export const getMember = async (memberId) => {
    try {
        const conn = await pool.getConnection();
        cosnt [user] = await pool.query(getMemberID, memberId);

        console.log(user);

        if(user.length == 0) {
            return -1;
        }

        conn.release();
        return user;
    
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

export const setPrefer = async(userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();

        await pool.query(connectFoodCategory,[foodCategoryId, userId]);

        conn.release();
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getUserPreferToUserId = async (memberID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToMemberId, memberID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

export const addReview = async (reviewDto) => {
    try {
        const conn = await pool.getConnection();

        const [confirm1] = await pool.query(confirmMember, reviewDto.member_id);

        if(!confirm1[0].isExistUser) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReview, [reviewDto.member_id, reviewDto.store_id, reviewDto.review_body, parseFloat(reviewDto.rate)]);
        conn.release();
        return result;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}