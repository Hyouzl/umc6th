import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"
import { createMemberMission, createNewMission } from "../services/mission.service.js"


export const newMission = async(req, res, next) => {

    res.send(response(status.SUCCESS, await createNewMission(req.body)));

};

export const newMemberMission = async(req, res, next) => {
    res.send(response(status.SUCCESS, await createMemberMission(req.body)));
};

