import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import {ThemeProvider} from '../store/theme-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brock Dallman Web Developer Official Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Brock Dallman's official web development portfolio site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  );

}
