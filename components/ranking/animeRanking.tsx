import AnimeRankingItem from './items/animeRankingItem';
import Ranking from './ranking';

interface AnimeRanking {
    id: number,
    slug: string,
    nameRm: string,
    nameJp: string,
    imgSrc: string,
    likes: number,
}

interface AnimeRankingProps {
    ranking: AnimeRanking[],
}

export default function AnimeRanking({ ranking }: AnimeRankingProps) {

    return (
        <Ranking ranking={ranking} DisplayedRankingItem={AnimeRankingItem} />
    );
}