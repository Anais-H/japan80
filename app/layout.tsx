import { Metadata } from 'next';
import '../styles/global.scss';
import styles from '../styles/layout.module.scss';
import Layout from '../components/layout';
import Footer from '../components/footer';
import React from 'react';
import NextAuthProvider from '../components/NextAuthProvider';
import ThemeSwitch from '../components/ThemeSwitch';
import Navbar from '../components/navbar';
import ThemeProvider from '@/components/ThemeProvider';
 
export const metadata: Metadata = {
  title: "City Pop&apos;in",
  description: 'Information about life and music in Japan in the 80s',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    
    return (
      <html lang="en">
        <body>
            <NextAuthProvider>
                <ThemeProvider>
                    <Layout>
                        <React.StrictMode>
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
                        </React.StrictMode>
                    </Layout>
                    <Footer />
                </ThemeProvider>
            </NextAuthProvider>   
        </body>
      </html>
    )
  }