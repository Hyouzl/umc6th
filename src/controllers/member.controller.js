import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { getMyReview } from "../provider/member-review.provider.js";
import { createNewReview, joinMember } from "../services/member.service.js";

export const memberSignin = async(req, res, next) => {
    console.log("회원가입 요청");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await joinMember(req.body)));

}
export const newReview = async(req, res, next) => {

    console.log("리뷰 작성");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await createNewReview(req.body)));

}

export const myReviews = async(req, res, next) => {
    console.log("내 리뷰 목록 조회 요청");
    console.log("req.params: ",req.params);
    console.log("req.query: ",req.query);

    res.send(response(status.SUCCESS, await getMyReview(req.params.memberId, req.query)));

}