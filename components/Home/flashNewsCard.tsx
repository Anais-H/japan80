import styles from '../../styles/flashNews.module.scss';

type FlashNewsCardProps = {
    image?: {
        imageSrc?: string,
        imageAlt?: string,
    },
    topContent: string,
    mainContent: string,
    bottomContent: string,
}

export default function FlashNewsCard({ image, topContent, mainContent, bottomContent }: FlashNewsCardProps) {

    return (
        <div className={styles.flashNewsCard}>
            <div className={styles.top}>{topContent}</div>
            <div className={styles.main}>{mainContent}</div>
            <div className={styles.bottom}>Le {bottomContent}</div>
        </div>
    )
}