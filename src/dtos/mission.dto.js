export const createMissionDTO = (storeId, reward, deadline, missionSpec) => {
    return {
        'store_id': storeId,
        'reward': reward,
        'deadline': deadline,
        'mission_spec': missionSpec
    };
};

export const responseMissionDTO = (mission) => {
    console.log(mission);
    return {mission};
};


export const createMemberMissionDTO = (memberId, missionId, status = 'ing') => {
    return {
        "member_id": memberId,
        "mission_id": missionId,
        "status": status
    };

};

export const responseMemebrMissionDTO = (mission) => {
    return {mission};
};

