import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getMyReviewByReviewId, getMyReviewByReviewIdAtFirst } from "./member-review.query.js";

export const getPreviewMyReview = async(cursorId, size, memberId) => {

    try {
        const conn = await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getMyReviewByReviewIdAtFirst, [parseInt(memberId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getMyReviewByReviewId, [parseInt(memberId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}