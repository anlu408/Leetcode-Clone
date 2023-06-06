import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <title>Leetcode Clone</title>
      <meta name='viewport' content='width=device-wdith, initial-scale=1'/>
      <link rel='icon' href='/favicon.png'/>
      <meta name='description' content='Web application cloning the Leetcode website, useful videos and problem solutions.' />
    </Head>
    <Component {...pageProps} />
    </> 
  )
}
