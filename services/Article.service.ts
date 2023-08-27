import { akinaNakamoriArticle, anzenChitaiArticle } from "../mockData/article.mock"

export const getArticleByArtist = async (artistId: string) => {
    if (artistId === 'akina_nakamori') {
        return akinaNakamoriArticle;
    } else if (artistId === 'anzen_chitai') {
        return anzenChitaiArticle;
    }
}