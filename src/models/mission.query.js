export const insertMission = "INSERT INTO mission (store_id, reward, deadline, mission_spec, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(6), NOW(6));";
export const insertMemberMission = "INSERT INTO member_mission (member_id, mission_id, status, created_at, updated_at) VALUES (?, ?, ?, NOW(6), NOW(6));";
export const confirmStore = "SELECT EXISTS(SELECT 1 FROM store WHERE id = ?) as isExistStore;";
export const confirmMission = "SELECT EXISTS(SELECT 1 FROM mission WHERE store_id = ?) as isExistStoreMission;";
export const getMission = "SELECT * FROM mission WHERE id = ?;";