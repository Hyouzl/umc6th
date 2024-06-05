import { createMemberMissionDTO, createMissionDTO } from "../dtos/mission.dto.js"
import { addMemberMission, addMission } from "../models/mission.dao.js"

export const createNewMission = async(body) => {


    const missionDTO = createMissionDTO(body.storeId, body.reward, body.deadline, body.missionSpec);
    const result = await addMission(missionDTO);

    return result;
}

export const createMemberMission = async(body) => {
    const memberMissionDTO = createMemberMissionDTO(body.memberId, body.missionId);
    const result = await addMemberMission(memberMissionDTO);

    return result;
}