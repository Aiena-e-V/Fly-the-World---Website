import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta charSet="utf-8" />

            <meta name="theme-color" content="#00c2cc" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>FTW-SIM - Fly the World</title>

            <meta
                key="description"
                name="description"
                content="Fly The World is a free flight simulator addon that lets you create airlines and own virtual aircraft, opening up endless possibilities in the virtual skies."
            />
            <meta
                key="og:title"
                name="og:title"
                content="Fly the World"
            />
            <meta
                key="og:description"
                name="og:description"
                content="Fly The World is a free flight simulator addon that lets you create airlines and own virtual aircraft, opening up endless possibilities in the virtual skies."
            />
            <meta
                key="og:image"
                name="og:image"
                content="/FTW-Logo_BLK.png"
            />
        </Head>
        <NavBar />
        <ScrollToTopButton />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
