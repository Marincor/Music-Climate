import Header from "../../components/Header";
import TableList from "../../components/TableList";
import styles from "../../styles/SavedList/List.module.css";
import Head from 'next/head'
export default function List() {
  return (
    <>
      <Head>
        <title>Music Climate - Your List</title>
        <meta name="description" content="Get your passport and get your music list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.box}>
        <Header />
        <div className={styles.boxTable}>
          <TableList />
        </div>
      </body>
    </>
  );
}
