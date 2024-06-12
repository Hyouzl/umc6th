import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"
import { getReview } from "../provider/store.provider.js";
import { createNewMission } from "../services/mission.service.js"


export const newMission = async(req, res, next) => {
    console.log("가게 미션 작성 요청");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await createNewMission(req.body)));

};

export const reviewPreview = async(req, res, next) => {
    console.log("가게 리뷰 조회 요청");
    console.log("req.params", req.params);
    console.log("req.query", req.query);

    res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));

}
