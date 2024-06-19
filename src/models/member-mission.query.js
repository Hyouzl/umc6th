export const getMyMissionByMemberId =
"SELECT mm.member_id, mm.id, mm.status, mm.mission_id, s.name, m.reward, m.deadline, m.mission_spec"
+ "FROM member_mission mm JOIN mission m on m.id = mm.mission_id" 
+ "JOIN store s on m.store_id = s.id"
+ "WHERE mm.member_id = ? AND mm.status = 0 AND mm.id <= ?"
+ "ORDER BY mm.id DESC LIMIT ?;";

export const getMyMissionByMemberIdAtFirst = 
"SELECT mm.member_id, mm.id, mm.status, mm.mission_id, s.name, m.reward, m.deadline, m.mission_spec"
+ "FROM member_mission mm JOIN mission m on m.id = mm.mission_id"
+ "JOIN store s on m.store_id = s.id"
+ "WHERE mm.member_id = ? AND mm.status = 0"
+ "ORDER BY mm.id DESC LIMIT ?;";