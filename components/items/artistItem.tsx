import Link from 'next/link';
import styles from '../../styles/items/artistItem.module.scss';
import { Paths } from '../../utils/constants';
import LikeButton from '../buttons/likeButton';


interface ArtistInfo {
    artistId: number,
    artistNameRm: string,
    artistNameJp: string,
    artistSlug: string,
    artistAvatarImgSrc: string,
    isLiked: boolean,
}

interface ArtistItemProps {
    data: ArtistInfo,
}

export default function ArtistItem({ data }: ArtistItemProps) {

    return (
        <div key={Date.now()} className={styles.item}>
            <div className={styles.relativeContainer}>
                <Link href={"/artists/" + data.artistSlug}><a><img className={styles.avatar} src={Paths.ARTIST_FOLDER + data.artistAvatarImgSrc} alt={data.artistNameRm} /></a></Link>
                <span className={styles.likedIcon}><LikeButton size='sm' like={data.isLiked} id={data.artistId} objType={'artist'} /></span>
            </div>
            <div key={data.artistNameRm}><Link className='alt' href={"/artists/" + data.artistSlug}>{data.artistNameRm}</Link></div>
            <div key={data.artistNameJp}><Link className='alt' href={"/artists/" + data.artistSlug}>{data.artistNameJp}</Link></div>
        </div>
    );
}