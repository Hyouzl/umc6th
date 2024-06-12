import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { createReviewDTO, responseReviewDTO, signinResponseDTO } from "../dtos/member.dto.js";
import { getStoreReview } from "../models/store.dao.js";
import { addReview, addMember, getUserPreferToUserId, setPrefer, getMember } from "../models/member.dao.js";



export const joinMember = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinMemberData = await addMember ({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    })

    if(joinMemberData === -1) {
        throw new BaseError(status.EMAIL_ALEADY_EXIST);
    } else {
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinMemberData, prefer[i]);
        }
        return signinResponseDTO(await getMember(joinMemberData), await getUserPreferToUserId(joinMemberData));
    }

    
}

export const createNewReview = async(body) => {

    console.log(body);

    const reviewDto = createReviewDTO(body.memberId, body.storeId, body.review_body, parseFloat(body.rate));
    const result = await addReview(reviewDto);

    if (result === -1) {
        throw new BaseError(status.MEMBER_NOT_FOUND);
    } else {
        return responseReviewDTO(await getStoreReview(result));
    }
  
    return result;
}