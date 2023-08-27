import Link from 'next/link';
import styles from '../../styles/slidingBanner.module.scss';

interface EventItem {
    slug?: string,
    text: string,
}

interface SlidingBannerProps {
    events: {
        debuteAnniversaries?: EventItem[],
        birthdays?: EventItem[],
    },
}

export default function SlidingBanner({ events }: SlidingBannerProps) {

    const anniversariesText = events.debuteAnniversaries ?
        <>Happy debute anniversary to {' '}
            {events.debuteAnniversaries.map((e, index) => <span key={index} className={styles.item}><Link className='alt' key={"anvsr-" + e.slug} href={"/artists/" + e.slug}>{e.text}</Link></span>)} !</>
        : "";

    const birthdaysText = events.birthdays ?
        <>Happy birthday to {' '}
            {events.birthdays.map((e, index) => <span key={index} className={styles.item}><Link className='alt' key={"bthd-" + e.slug} href={"/artists/" + e.slug}>{e.text}</Link></span>)} !
        </>
        : "";

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.info}>{anniversariesText}</span>
                <span className={styles.info}>{birthdaysText}</span>
            </div>

        </div>
    )
}