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
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body className={styles.body} >
          <Header />
          <Weather />
        </body>
   
  </>
  )
}
