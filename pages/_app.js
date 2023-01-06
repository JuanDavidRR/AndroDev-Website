import Head from "next/head";

import "../styles/globals.css";

import { Footer, Navbar } from "../components";
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>AndroDev | Agencia de Desarrollo Web</title>
      <meta name="description" content="Agencia de Desarrollo Web" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
