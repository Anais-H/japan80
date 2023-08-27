import { useState } from 'react';
import styles from '../../styles/rankingsDepartureBoard.module.scss';
import DepartureBoard from '../departureBoard/DepartureBoard';
import RankingDepartureBoard from '../departureBoard/RankingDepartureBoard';


export default function RankingsDepartureBoard({ rankings }) {
    const OVERALL_PERIOD = 1, LAST_MONTH_PERIOD = 2;
    const ARTISTS_CATEGORY = 1, ALBUMS_CATEGORY = 2, ANIMES_CATEGORY = 3;
    const [dataPeriod, setDataPeriod] = useState(OVERALL_PERIOD);
    const [dataCategory, setDataCategory] = useState(ARTISTS_CATEGORY);
    const BOARD_SIZE = 40;
    const ACTIVE_COLOR = "aquamarine";


    function getContent() {
        let data = dataPeriod === OVERALL_PERIOD ? rankings.overall : rankings.lastMonth;

        if (dataCategory === ARTISTS_CATEGORY) {
            return data.artists.map((d, index) => {return {rank: (index+1).toString(), likes: d.likes.toString(), rankedItem: d.nameRm}});

        } else if (dataCategory === ALBUMS_CATEGORY) {
            return data.albums.map((d, index) => {return {rank: (index+1).toString(), likes: d.likes.toString(), rankedItem: d.albumNameRm + ' - ' + d.artistNameRm}});
        } else if (dataCategory === ANIMES_CATEGORY) {
            return data.animes.map((d, index) => {return {rank: (index+1).toString(), likes: d.likes.toString(), rankedItem: d.nameRm}});
        }
    }

    function getContentTitle() {
        let title = "   Likes ";
        switch (dataCategory) {
            case ARTISTS_CATEGORY:
                title += "Artists";
                break;
        
            case ALBUMS_CATEGORY:
                title += "Albums & Singles";
                break;
            
            case ANIMES_CATEGORY:
                title += "Animes";
                break;
            default:
                break;
        }

        return title;
    }


    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <DepartureBoard content={["Our Best 10 - Likes Rankings", "Updated everyday"]} />
            </div>

            <div className={styles.boardButtonsContainer}>
                <button onClick={() => setDataPeriod(OVERALL_PERIOD)}><DepartureBoard content={["Overall"]} color={dataPeriod === OVERALL_PERIOD ? ACTIVE_COLOR : undefined}/></button>
                <button onClick={() => setDataPeriod(LAST_MONTH_PERIOD)}><DepartureBoard content={["Last month"]} color={dataPeriod === LAST_MONTH_PERIOD ? ACTIVE_COLOR : undefined} /></button>
            </div>
            

            <DepartureBoard content={[getContentTitle()]} size={BOARD_SIZE}/>
            <RankingDepartureBoard content={getContent()} size={BOARD_SIZE}/>
            

            <div className={styles.boardButtonsContainer}>
                <button onClick={() => setDataCategory(ARTISTS_CATEGORY)}><DepartureBoard content={['Artists']} color={dataCategory === ARTISTS_CATEGORY ? ACTIVE_COLOR : undefined}/></button>
                <button onClick={() => setDataCategory(ALBUMS_CATEGORY)}><DepartureBoard content={['Albums & Singles']} color={dataCategory === ALBUMS_CATEGORY ? ACTIVE_COLOR : undefined} /></button>
                <button onClick={() => setDataCategory(ANIMES_CATEGORY)}><DepartureBoard content={['Animes']} color={dataCategory === ANIMES_CATEGORY ? ACTIVE_COLOR: undefined} /></button>
            </div>
        </div >
    );
}