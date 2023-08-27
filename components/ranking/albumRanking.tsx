import AlbumRankingItem from './items/albumRankingItem';
import Ranking from './ranking';

interface AlbumRanking {
    id: number,
    albumNameRm: string,
    albumNameJp: string,
    artistNameRm: string,
    releaseDate: string,
    artistFolderName: string,
    type: string,
    imgSrc: string,
    likes: number,
}

interface AlbumRankingProps {
    ranking: AlbumRanking[],
}

export default function AlbumRanking({ ranking }: AlbumRankingProps) {

    return (<Ranking ranking={ranking} DisplayedRankingItem={AlbumRankingItem} />);
}