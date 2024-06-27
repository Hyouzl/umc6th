export const previewMyMissionResponseDTO = (data) => {
    const membermissions = [];

    for (let i = 0; i < data.length; i++) {
        membermissions.push({
            "member_id": data[i].member_id,
            "member_misson_id": data[i].id,
            "mission_id": data[i].mission_id,
            "store_name": data[i].name,
            "reward": data[i].reward,
            "deadline": formatDate(data[i].deadline),
            "mission_spec": data[i].mission_spec
        })
    }

    return {"membermissionData": membermissions, "cursorId": data[data.length-1].id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}