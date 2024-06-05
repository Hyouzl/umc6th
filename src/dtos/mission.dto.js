export const createMissionDTO = (storeId, reward, deadline, missionSpec) => {
    return {
        "storeId": storeId,
        "reward": reward,
        "deadline": deadline,
        "missionSpec": missionSpec
    };

};

export const createMemberMissionDTO = (memberId, missionId, status = 'ing') => {
    return {
        "memberId": memberId,
        "missionId": missionId,
        "status": status
    };

};