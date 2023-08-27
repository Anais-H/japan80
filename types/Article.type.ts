import { Album, Single } from './Album.type';

interface Fact {
    id: number,
    content: string,
    source: string,
}

export type Article = {
    artistId: number,
    artistNameRm: string,
    artistNameJp: string,
    artistBirthday: string,
    birthCity: string,
    birthPrefecture: string,
    artistAvatar: string,
    artistLongImage: string,
    artistSquareImage: string,
    isLiked: boolean,
    likes: number,
    bannerVideoFile: string,
    artistDescription1: string,
    artistDescription2: string,
    artistDescription3: string,
    facts: Fact[],
    albums: Album[],
    singles: Single[]
}

export type GroupArticle = {
    artistId: number,
    artistNameRm: string,
    artistNameJp: string,
    artistAvatar: string,
    artistLongImage: string,
    artistSquareImage: string,
    isLiked: boolean,
    likes: number,
    bannerVideoFile: string,
    artistDescription1: string,
    artistDescription2: string,
    artistDescription3: string,
    facts: Fact[],
    albums: Album[],
    singles: Single[]
}