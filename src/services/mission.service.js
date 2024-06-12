import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { createMemberMissionDTO, createMissionDTO, responseMissionDTO } from "../dtos/mission.dto.js"
import { addMemberMission, addMission, getStoreMission } from "../models/mission.dao.js"

export const createNewMission = async(body) => {

    console.log("body:", body)

    const missionDTO = createMissionDTO(body.storeId, body.reward, body.deadline, body.missionSpec);
    const result = await addMission(missionDTO);

    console.log(result);

    if(result === -1) {
        throw new BaseError(status.STORE_NOT_FOUND);
    }else {
        return responseMissionDTO(await getStoreMission(result));
    }

}

export const createMemberMission = async(body) => {
    const memberMissionDTO = createMemberMissionDTO(body.memberId, body.missionId);
    const result = await addMemberMission(memberMissionDTO);

    return result;
}