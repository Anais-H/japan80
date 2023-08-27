import Link from "next/link";
import { Paths } from "../../../utils/constants";
import styles from '../../../styles/ranking.module.scss';

interface AlbumRankingItemProps {
    item: any,
}

export default function AlbumRankingItem({ item }: AlbumRankingItemProps) {

    const artistSlugPath = "/artists/";

    return (
        <div className={styles.rankingItem}>
            <div>
                <img src={Paths.ARTIST_FOLDER + item.imgSrc} alt={item.albumNameRm} />
            </div>

            <div className={styles.content}>
                <div>
                    <div className='bold'>{item.albumNameRm}</div>
                    <div>{item.albumNameJp}</div>
                    <div><Link className='alt' href={artistSlugPath + item.artistSlug}>{item.artistNameRm}</Link></div>
                </div>

                <div className='bold'>{item.likes} <span className='fs-sm'>likes</span></div>
            </div>
        </div>
    );
}