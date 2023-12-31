import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import LanguageContextProvider from "../components/LanguageContext";



function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <LanguageContextProvider>
      <Head>
        <title>PxWeb2-POC</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      </LanguageContextProvider>
    </>
  );
}

export default CustomApp;
