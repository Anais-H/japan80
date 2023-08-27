import styles from '../../styles/ranking.module.scss';

interface RankingProps {
    ranking: any[],
    DisplayedRankingItem: React.FunctionComponent<any>,
}

export default function Ranking({ ranking, DisplayedRankingItem }: RankingProps) {

    const topThree = ranking.slice(0, 3);
    const lower = ranking.slice(3);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {topThree.map(rkItem =>
                    <DisplayedRankingItem key={rkItem.id} item={rkItem} />
                )}
            </div>

            <div className={styles.content}>
                {lower.map(rkItem =>
                    <DisplayedRankingItem key={rkItem.id} item={rkItem} />
                )}
            </div>
        </div>
    );
}