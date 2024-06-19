import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getReview, getReviewByReviewId, getReviewByReviewIdAtFirst } from "./store.query.js";

export const getStoreReview = async(reviewId) => {
    try {
        const conn = await pool.getConnection();
        const storeReview = await pool.query(getReview, reviewId);

        console.log("response review: ", storeReview);
        
        if(storeReview.length === 0){
            return -1;
        }    

        conn.release();
        return storeReview;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getPreviewReview = async(cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getReviewByReviewId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}