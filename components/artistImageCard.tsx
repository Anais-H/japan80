import styles from '../styles/imageCard.module.scss';
import { Paths } from '../utils/constants';
import { getAge } from '../utils/utils';
import LikeButton from './buttons/likeButton';

export default function ArtistImageCard({ data }) {

    return (
        <div className={styles.imageCard}>
            <img src={Paths.ARTIST_FOLDER + data.artistAvatar} alt={data.artistNameRm} />
            <div className={styles.topContent}>
                <div>{data.artistNameRm}</div>
                <div>{data.artistNameJp}</div>
            </div>

            <div className={styles.content}>
                <div>
                    <div>Born on {data.artistBirthday} {getAge(data.artistBirthday)} yo</div>
                    <div className={styles.marginBottom}>In {data.birthCity}, {data.birthPrefecture}</div>
                </div>
                <div>
                    <span><LikeButton like={data.isLiked} id={data.artistId} objType={'artist'} /></span>
                </div>
            </div>

            <div className={styles.footer}>
                <span>{data.likes} like{data.likes > 1 ? 's' : ''}</span>
            </div>
        </div>
    )
}