import { SessionProvider } from 'next-auth/react';
import '../styles/global.scss';
import { AppProps } from 'next/app';
import Layout from '../components/layout';
import Footer from '../components/footer';
import React from 'react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return <SessionProvider session={session}>
        <ThemeProvider>
            <Layout>
                <React.StrictMode>
                    <Component {...pageProps} />
                </React.StrictMode>
            </Layout>
            <Footer />
        </ThemeProvider>
    </SessionProvider>
}

export default MyApp;