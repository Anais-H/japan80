import { Survey } from "../types/Survey.type";

/**
 * Calul le nombre de votes total en additionnant le nombre de votes par option.
 * @returns Le nombre de votes total
 */
export const getTotalNumberOfVotes = (survey: Survey) => {
    return survey.options.reduce((acc, current) => acc + current.nb_votes, 0);
}