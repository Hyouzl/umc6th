import { previewMyReviewResponseDTO } from "../dtos/member-review.dto.js";
import { getPreviewMyReview } from "../models/member-review.dao.js";

export const getMyReview = async(memberId, query) => {
    const {reviewId, size = 3} = query;

    return previewMyReviewResponseDTO(await getPreviewMyReview(reviewId, size, memberId));

}
