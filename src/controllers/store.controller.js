import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"
import { createNewMission } from "../services/mission.service.js"


export const newMission = async(req, res, next) => {
    console.log("가게 미션 작성을 요청");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await createNewMission(req.body)));

};
