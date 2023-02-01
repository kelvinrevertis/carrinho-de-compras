import { GlobalStyle } from '@/styles/global'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({ subsets: ['latin'], weight: ["300","400","600","700"], style:['normal'] })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle/>
      <main className={montserrat.className}><Component {...pageProps} /></main>
    </>


  )
}
