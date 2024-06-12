import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { createReviewDTO, signinResponseDTO } from "../dtos/user.dto.js";
import { addReview, addUser, getUser, getUserPreferToUserId, setPrefer } from "../models/user.dao.js";


export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser ({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    })

    if(joinUserData == -1) {
        throw new BaseError(status.EMAIL_ALEADY_EXIST);
    } else {
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserId(joinUserData));
    }

    
}

export const createNewReview = async(body) => {

    console.log(body);

    const reviewDto = createReviewDTO(body.memberId, body.storeId, body.body, parseFloat(body.score));
    const result = await addReview(reviewDto);
  
    return result;
}