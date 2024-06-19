import { previewMissionResponseDTO } from "../dtos/store-mission.dto";
import { getStoreMissions } from "../models/mission.dao";

export const getStoreMission = async(storeId, query) => {
    const {missionId, size = 3} = query;

    return previewMissionResponseDTO(await getStoreMissions(missionId, size, storeId));
}