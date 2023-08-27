import styles from "../../styles/departureBoard/departureBoard.module.scss";
import { RankingDepartureBoardRowContent } from "../../types/DepartureBoard";
import RankingDepartureBoardRow from "./RankingDepartureRow";

export default function RankingDepartureBoard({ content, size }: { content: RankingDepartureBoardRowContent[], size?: number}) {
    const TOP_ONE_COLOR = "gold";
    
    return (
        <div className={styles.departureBoard}>
            { content.map(({rank, likes, rankedItem}, index) => <RankingDepartureBoardRow key={index} content={{rank: rank.toUpperCase(), likes: likes.toUpperCase(), rankedItem: rankedItem.toUpperCase()}} 
                rowSize={size} color={index === 0 ? TOP_ONE_COLOR: undefined} />)}
        </div>
    );
}