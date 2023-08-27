import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import '@videojs/themes/dist/city/index.css';
import styles from './../styles/bannerVideo.module.scss';

interface BannerVideoProps {
    options: any;
}

export default function BannerVideo({ options }: BannerVideoProps) {

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const player = playerRef.current;

        if (!player) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            playerRef.current = videojs(videoElement, options);
        }

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [options, videoRef, playerRef]);

    console.log("rendering bannerVideo");

    return (
        <div className={styles.container} data-vjs-player>
            <video ref={videoRef} className={styles.video + " video-js vjs-big-play-centered vjs-theme-city"} />
        </div>
    );
}