import { theSurvey, theSurveyResults } from "../mockData/mockdata";

export const getCurrentSurvey = () => {
    return theSurvey;
}

export const getLastSurveyResult = () => {
    return theSurveyResults[0];
}

export const getPaginatedSurveyResults = (page, limit) => {
    const res = theSurveyResults.slice(page, page * limit + limit);
    return res;
}