export const signinResponseDTO = (member, prefer) => {
    const preferFood = [];
    for(let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return { "email": member[0].email, "name": member[0].name, "preferCategory": preferFood};
}

export const createReviewDTO  = (memberId, storeId, revieBody, rate) => {
    return {
        "member_id": memberId,
        "store_id": storeId,
        "review_body": reviewBody,
        "rate": rate,
    };
}

export const responseReviewDTO = (review) => {
    console.log(review);
    return {review};
};
