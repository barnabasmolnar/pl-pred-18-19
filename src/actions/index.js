// ACTION CONSTANTS
export const REORDER_TEAMS = "REORDER_TEAMS";
export const SUBMIT_USER_PREDICTION = "SUBMIT_USER_PREDICTION";
export const CHANGE_VIEW = "CHANGE_VIEW";

export function reorderTeams(teams) {
    return { type: REORDER_TEAMS, teams };
}

export function submitUserPrediction(predictionObject) {
    return { type: SUBMIT_USER_PREDICTION, predictionObject };
}

export function changeView() {
    return { type: CHANGE_VIEW };
}