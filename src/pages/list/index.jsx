import Header from "../../components/Header";
import TableList from "../../components/TableList";
import styles from "../../styles/SavedList/List.module.css";
import Head from "next/head";
import Loading from "../../components/LoadingPageList";
import { LoadingContext } from "../../contexts/Loading";
import { useContext, useEffect } from "react";
import { MusicListContext } from "../../contexts/MusicList";
import EmptyList from "../../components/EmptyList";

export default function List() {
  const { loading, setLoading } = useContext(LoadingContext);
  const { savedMusicList} = useContext(MusicListContext)

  console.log(savedMusicList)

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  function renderContent() {
    if (loading) {
      return (
        <main className={styles.box}>
          <div className={styles.boxTable}>
            <h2 className={styles.title}>
              {" "}
              <Loading />
              {savedMusicList.length === 0 ? <> 
                <EmptyList />
              <p> save a list to see something here </p> 
              </> 
              
              : false}
            </h2>

            <TableList />
          </div>
        </main>
      );
    } else {
      return (
        <main className={styles.box}>
          <div className={styles.boxTable}>
           {savedMusicList.length !== 0 ? <p>  <h2 className={styles.title}> Your List: </h2> </p> : false}
            <TableList />
            {savedMusicList.length === 0 ? <> 
              <EmptyList />
              <p className={styles.empty}> save a list to see something here </p> 
            
            </> 
              
              : false}
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
