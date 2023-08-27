import styles from '../../styles/item.module.scss';
import { Album as AlbumType } from '../../types/Album.type';
import { Paths } from '../../utils/constants';
import LikeButton from '../buttons/likeButton';

interface AlbumItemProps {
    album: AlbumType,
}

export default function AlbumItem({ album }: AlbumItemProps) {

    return (
        <div key={Date.now()} className={styles.container}>
            <div><small>{album.releaseDate}</small></div>
            <div className={styles.imgContainer}>
                <span className={styles.likedIcon}><LikeButton size='sm' like={album.isLiked} id={album.id} objType={'album'} /></span>
                <img className={styles.img} src={Paths.ARTIST_FOLDER + album.imgSrc} alt={album.type + " nommé " + album.titleRm + " de " + album.artistName} />
            </div>
            <div><b>{album.titleRm}</b></div>
            <div>{album.titleJp}</div>
        </div>
    );
}