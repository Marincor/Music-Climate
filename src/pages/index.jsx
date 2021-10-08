import Head from 'next/head'
import Header from '../components/Header'
import Weather from '../components/Home'
import styles from '../styles/Home/Home.module.css'

export default function Home() {
  return (
  <>
      <Head>
        <title>Music Climate</title>
        <meta name="description" content="Get your passport and get your music list" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body >
          <Header />
          <Weather />
        </body>
   
  </>
  )
}
