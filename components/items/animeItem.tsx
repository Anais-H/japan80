import styles from '../../styles/item.module.scss';
import { Paths } from '../../utils/constants';
import LikeButton from '../buttons/likeButton';

interface AnimeItemProps {
    data: any,
}

export default function AnimeItem({ data }: AnimeItemProps) {

    return (
        <div key={Date.now()} className={styles.container}>
            <div><small>{data.firstAired.slice(0, 4)}</small></div>
            <div className={styles.imgContainer}>
                <span className={styles.likedIcon}><LikeButton size='sm' like={data.isLiked} id={data.animeId} objType={'album'} /></span>
                <img className={styles.img} src={Paths.ANIME_FOLDER + data.imgSrc} alt={"Anime nommé " + data.animeNameRm} />
            </div>
            <div><b>{data.animeNameRm}</b></div>
            <div>{data.animeNameJp}</div>
        </div>
    );
}