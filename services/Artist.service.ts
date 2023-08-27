import { akinaNakamori, anzenChitai } from "../mockData/artist.mock";
import { theArtist } from "../mockData/mockdata";

export const getArtists = (limit: number, page: number) => {
    return [akinaNakamori, anzenChitai];
}

export const getHighlightArtist = () => {
    return theArtist;
}

export const like = (artistId: number) => {
    console.log("liked artist " + artistId);
}

export const dislike = (artistId: number) => {
    console.log("disliked artist " + artistId);
}