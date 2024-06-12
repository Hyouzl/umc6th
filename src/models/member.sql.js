export const insertMemberSql = "INSERT INTO member (email, name, gender, birth, address, spec_address, phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getMemberID = "SELECT * FROM member WHERE id = ?;";

export const connectFoodCategory = "INSERT INTO member_prefer (category_id, member_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail;";

export const confirmMember = "SELECT EXISTS(SELECT 1 FROM member WHERE id = ?) as isExistMember;";

export const getPreferToMemberId = "SELECT mp.id, mp.category_id, mp.member_id, fc.name "
+ "FROM member_prefer mp JOIN food_category fc on mp.category_id = fc.id "
+ "WHERE mp.member_id = ? ORDER BY mp.category_id ASC;";

export const insertReview = "INSERT INTO review (member_id, store_id, review_body, rate) VALUES (?, ?, ?, ?);";