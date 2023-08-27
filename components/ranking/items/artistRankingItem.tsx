import Link from "next/link";
import { Paths } from "../../../utils/constants";
import styles from '../../../styles/ranking.module.scss';

interface ArtistRankingItemProps {
    item: any,
}

export default function ArtistRankingItem({ item }: ArtistRankingItemProps) {

    return (
        <div className={styles.rankingItem}>
            <div>
                <Link href={"/artists/" + item.slug}><img src={Paths.ARTIST_FOLDER + item.imgSrc} alt={item.nameRm} /></Link>
            </div>

            <div className={styles.content}>
                <div>
                    <div><Link className='bold alt' href={"/artists/" + item.slug}>{item.nameRm}</Link></div>
                    <div><Link className='alt' href={"/artists/" + item.slug}>{item.nameJp}</Link></div>
                </div>

                <div className='bold'>{item.likes} <span className='fs-sm'>likes</span></div>
            </div>
        </div>
    );
}