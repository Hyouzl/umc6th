export const previewMissionResponseDTO = (data) => {

    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "store_id": data[i].store_id,
            "misson_id": data[i].id,
            "reward": data[i].reward,
            "deadline": formatDate(data[i].deadline),
            "mission_spec": data[i].mission_spec
        })
    }

    return {"missionData": missions, "cursorId": data[data.length-1].id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}