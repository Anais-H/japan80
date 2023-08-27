import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import Navbar from './navbar';
import ThemeSwitch from './ThemeSwitch';

export const siteTitle = 'Japan 80s'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>City Pop'in</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Information about life and music in Japan in the 80s"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Navbar />
            <div className={styles.logo}>
                <span>C</span><span>i</span><span>t</span><span>y</span>
                <span className={styles.space}></span>
                <span>P</span><span>o</span><span>p</span><span>'in</span>
            </div>

            <main className={styles.main}>{children}</main>

            <div className={styles.themeSwitch}>
                <ThemeSwitch />
            </div>
        </div>
    )
}