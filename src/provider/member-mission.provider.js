import { previewMyMissionResponseDTO } from "../dtos/member-mission.dto.js";
import { getPreviewMyMission } from "../models/member-mission.dao.js";

export const getMyMissions = async(memberId, query) => {
    const {missionId, size = 3} = query;
    
    return previewMyMissionResponseDTO(await getPreviewMyMission(missionId, size, memberId));
    
}