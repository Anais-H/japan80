"use client";
import { useState } from 'react';
import { dislike as dislikeAlbum, like as likeAlbum } from '../../services/album.service';
import { like as likeArtist, dislike as dislikeArtist } from '../../services/Artist.service';
import { dislike as dislikeAnime, like as likeAnime } from '../../services/Anime.service';
import styles from '../../styles/button/likeButton.module.scss';

interface LikeButtonProps {
    like: boolean,
    id: number,
    objType: "artist" | "album" | "anime",
    size?: 'sm',
}
export default function LikeButton({ like, id, objType, size }: LikeButtonProps) {

    const [likeState, setLikeState] = useState(like);

    const toggleLike = () => {
        if (objType === "artist") {
            if (likeState) {
                dislikeArtist(id);
            } else {
                likeArtist(id);
            }
        } else if (objType === "album") {
            if (likeState) {
                dislikeAlbum(id);
            } else {
                likeAlbum(id);
            }
        } else if (objType === "anime") {
            if (likeState) {
                dislikeAnime(id);
            } else {
                likeAnime(id);
            }
        }
        setLikeState(!likeState);
        console.log("toggleLike", !likeState);
    }

    return (
        <div key={Date.now()} className={size === 'sm' ? styles.sm : ''} onClick={toggleLike}>
            <input className={styles.checkbox} type="checkbox" id="checkbox" readOnly checked={likeState} />
            <label htmlFor="checkbox">
                <svg className={styles.svg} id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
                        <path className={styles.heart} d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" />
                        <circle className={styles.mainCirc} id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                        <g className={styles.grp7} id="grp7" opacity="0" transform="translate(7 6)">
                            <circle className={styles.oval1} id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                            <circle className={styles.oval2} id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                        </g>

                        <g className={styles.grp6} id="grp6" opacity="0" transform="translate(0 28)">
                            <circle className={styles.oval1} id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                            <circle className={styles.oval2} id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                        </g>

                        <g className={styles.grp3} id="grp3" opacity="0" transform="translate(52 28)">
                            <circle className={styles.oval1} id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                            <circle className={styles.oval2} id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                        </g>

                        <g className={styles.grp2} id="grp2" opacity="0" transform="translate(44 6)">
                            <circle className={styles.oval1} id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                            <circle className={styles.oval2} id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                        </g>

                        <g className={styles.grp5} id="grp5" opacity="0" transform="translate(14 50)">
                            <circle className={styles.oval1} id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                            <circle className={styles.oval2} id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                        </g>

                        <g className={styles.grp4} id="grp4" opacity="0" transform="translate(35 50)">
                            <circle className={styles.oval1} id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                            <circle className={styles.oval2} id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                        </g>

                        <g className={styles.grp1} id="grp1" opacity="0" transform="translate(24)">
                            <circle className={styles.oval1} id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                            <circle className={styles.oval2} id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                        </g>
                    </g>
                </svg>
            </label>
        </div>
    )
}