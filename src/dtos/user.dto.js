export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for(let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return { "email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const createReviewDTO  = (memberId, storeId, body, score) => {
    return {
        "member_id": memberId,
        "store_id": storeId,
        "body": body,
        "score": score,
    };
}