import { akinaNakamoriArticle, anzenChitaiArticle } from "../mockData/article.mock"

export const getArticleByArtist = async (artistId: string) => {
    if (artistId === 'akina_nakamori') {
        return akinaNakamoriArticle;
    }
}

export const getArticleByGroup = async (groupId: string) => {
    if (groupId === 'anzen_chitai') {
        return anzenChitaiArticle;
    }
}