import { theAnime } from "../mockData/mockdata"

export const getHighlightAnime = () => {
    return theAnime;
}

export const like = (animeId: number) => {
    console.log("liked anime " + animeId);
}

export const dislike = (animeId: number) => {
    console.log("disliked anime " + animeId);
}