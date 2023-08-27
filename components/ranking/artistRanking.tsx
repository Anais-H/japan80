import ArtistRankingItem from './items/artistRankingItem';
import Ranking from './ranking';

interface ArtistRanking {
    id: number,
    slug: string,
    nameRm: string,
    nameJp: string,
    imgSrc: string,
    likes: number,
}

interface ArtistRankingProps {
    ranking: ArtistRanking[],
}

export default function ArtistRanking({ ranking }: ArtistRankingProps) {

    return (<Ranking ranking={ranking} DisplayedRankingItem={ArtistRankingItem} />);

}