export function reorderTeams(teams) {
    return { type: "REORDER_TEAMS", teams };
}

export function submitUserPrediction(predictionObject) {
    return { type: "SUBMIT_USER_PREDICTION", predictionObject };
}

export function changeView() {
    return { type: "CHANGE_VIEW" };
}