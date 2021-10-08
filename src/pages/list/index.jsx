import Header from "../../components/Header";
import TableList from "../../components/TableList";
import styles from "../../styles/SavedList/List.module.css";
import Head from "next/head";
import Loading from "../../components/LoadingPageList";
import { LoadingContext } from "../../contexts/Loading";
import { useContext, useEffect } from "react";

export default function List() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function renderContent() {
    if (loading) {
      return (
        <main className={styles.box}>
          <div className={styles.boxTable}>
            <h2 className={styles.title}>
              {" "}
              <Loading />
            </h2>

            <TableList />
          </div>
        </main>
      );
    } else {
      return (
        <main className={styles.box}>
          <div className={styles.boxTable}>
            <h2 className={styles.title}> Your List: </h2>
            <TableList />
          </div>
        </main>
      );
    }
  }

  return (
    <>
      <Head>
        <title>Music Climate - Your List</title>
        <meta
          name="description"
          content="Get your passport and get your music list"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        {renderContent()}
      </body>
    </>
  );
}
