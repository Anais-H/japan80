import Link from "next/link";
import { Paths } from "../../../utils/constants";
import styles from '../../../styles/ranking.module.scss';

interface AnimeRankingItemProps {
    item: any,
}

export default function AnimeRankingItem({ item }: AnimeRankingItemProps) {

    const slugPath = "/animes/";

    return (
        <div className={styles.rankingItem}>
            <div>
                <Link href={slugPath + item.slug}><img src={Paths.ANIME_FOLDER + item.imgSrc} alt={item.nameRm} /></Link>
            </div>

            <div className={styles.content}>
                <div>
                    <div><Link className='bold alt' href={slugPath + item.slug}>{item.nameRm}</Link></div>
                    <div><Link className='alt' href={slugPath + item.slug}>{item.nameJp}</Link></div>
                </div>

                <div className='bold'>{item.likes} <span className='fs-sm'>likes</span></div>
            </div>
        </div>
    );
}