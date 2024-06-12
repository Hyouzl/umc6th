export const getMyReviewByReviewId = 
"SELECT m.name, m.id, r.id as review_id, r.rate, r.review_body, r.created_at"
+ "FROM review r JOIN member m on r.member_id = m.id" 
+ "WHERE r.member_id = ? AND r.id <= ?"
+ "ORDER BY r.id DESC LIMIT ?;";

export const getMyReviewByReviewIdAtFirst = 
"SELECT m.name, m.id, r.id as review_id, r.rate, r.review_body, r.created_at"
+ "FROM review r JOIN member m on r.member_id = u.id"
+ "WHERE r.member_id = ?"
+ "ORDER BY r.id DESC LIMIT ?;";