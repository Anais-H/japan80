/**
 * Retourne le nombre d'années écoulées à partir d'une date.
 * @param birthDateString La date à partir de laquelle le nombre d'années écoulées est compté.
 * @returns Le nombre d'années écoulées
 */
export const getAge = (birthDateString) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    const yearsDifference = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        return yearsDifference - 1;
    }

    return yearsDifference;
};

/**
 * Retourne la date au format US, mm/dd/yyyy.
 * @param date La date au format yyyy-mm-dd
 * @return La date au format mm/dd/yyyy
 */
export const getAmericanDate = (date) => {
    const splitDate = date.split('-');
    return splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];
}

/**
 * Retourne la date au format US, dd/mm/yyyy.
 * @param date La date au format yyyy-mm-dd
 * @return La date au format dd/mm/yyyy
 */
export const getFrenchDate = (date) => {
    const splitDate = date.split('-');
    return splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
}