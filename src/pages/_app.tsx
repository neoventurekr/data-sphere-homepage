import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'
import {appWithTranslation} from "next-i18next";

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

function App({ Component, pageProps }: AppProps) {
  return (
      <div className={pretendard.className}>
        <Component {...pageProps} />
      </div>
    )
}

export default appWithTranslation(App)