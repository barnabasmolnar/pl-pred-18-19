import { combineReducers } from "redux";

const teams = [
    {teamName: "Arsenal", teamBadge: "img/arsenal.png"},
    {teamName: "Bournemouth", teamBadge: "img/bournemouth.png"},
    {teamName: "Brighton & Hove Albion", teamBadge: "img/brighton-&-hove-albion.png"},
    {teamName: "Burnley", teamBadge: "img/burnley.png"},
    {teamName: "Cardiff City", teamBadge: "img/cardiff-city.png"},
    {teamName: "Chelsea", teamBadge: "img/chelsea.png"},
    {teamName: "Crystal Palace", teamBadge: "img/crystal-palace.png"},
    {teamName: "Everton", teamBadge: "img/everton.png"},
    {teamName: "Fulham", teamBadge: "img/fulham.png"},
    {teamName: "Huddersfield Town", teamBadge: "img/huddersfield-town.png"},
    {teamName: "Leicester City", teamBadge: "img/leicester-city.png"},
    {teamName: "Liverpool", teamBadge: "img/liverpool.png"},
    {teamName: "Manchester City", teamBadge: "img/manchester-city.png"},
    {teamName: "Manchester United", teamBadge: "img/manchester-united.png"},
    {teamName: "Newcastle United", teamBadge: "img/newcastle-united.png"},
    {teamName: "Southampton", teamBadge: "img/southampton.png"},
    {teamName: "Tottenham Hotspur", teamBadge: "img/tottenham-hotspur.png"},
    {teamName: "Watford", teamBadge: "img/watford.png"},
    {teamName: "West Ham United", teamBadge: "img/west-ham-united.png"},
    {teamName: "Wolverhampton Wanderers", teamBadge: "img/wolverhampton-wanderers.png"}
]

// Reducers
const teamsReducer = (state = teams, action) => {
    switch (action.type) {
        case "REORDER_TEAMS":
            return action.teams;
        default:
            return state;
    }
}

const initialUserPrediction = {
    teams: [],
    userName: ""
}
const userPredictionReducer = (state = initialUserPrediction, action) => {
    switch (action.type) {
        case "SUBMIT_USER_PREDICTION":
            return action.predictionObject;
        default:
            return state;
    }
}

const isTeamsViewReducer = (state = true, action) => {
    switch (action.type) {
        case "CHANGE_VIEW":
            return !state;
        default:
            return state;
    }
}

const reducers = combineReducers({
    teamsReducer,
    userPredictionReducer,
    isTeamsViewReducer
});

export default reducers;