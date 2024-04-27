import styles from '../styles/layout.module.scss';
import Navbar from './navbar';
import ThemeSwitch from './ThemeSwitch';
import { Metadata } from 'next';

export const siteTitle = 'Japan 80s';

export const metadata: Metadata = {
    title: "City Pop'in",
    description: ""
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
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