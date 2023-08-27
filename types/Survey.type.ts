import { SurveyType } from "../utils/constants";
import { User } from "./User.type";

export type SurveyOption = {
    label: string,
    nb_votes: number,
}

export type Survey = {
    id: number,
    type: SurveyType.SINGLE_CHOICE | SurveyType.MULTI_CHOICE | SurveyType.RANKING_CHOICE,
    created_by: User,
    question: string,
    created_at: string,
    options: SurveyOption[],
    start_at: string,
    duration: number,
}