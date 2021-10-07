import styles from "../../../styles/Home/Home.module.css";
import MusicList from "../../Home/MusicList";
import SearchBar from "../../Home/SearchBar";
import Climate from "../Climate";
export default function changeBackground(genre) {


    
    if(genre === "Rock") {

        return (
            <div className={`${styles.box} ${styles.rock}`} >
            <div className={styles.boxClimateSearch}>
              <SearchBar />
              <Climate />
            </div>
            <MusicList />
          </div>
        )

      
    }
    if(genre === "Pop") {

        return (
            <div className={`${styles.box} ${styles.pop}`} >
            <div className={styles.boxClimateSearch}>
              <SearchBar />
              <Climate />
            </div>
            <MusicList />
          </div>
        )
    }
    else if(genre === "Classical") {

        return (
            <div className={`${styles.box} ${styles.classical}`} >
            <div className={styles.boxClimateSearch}>
              <SearchBar />
              <Climate />
            </div>
            <MusicList />
          </div>
        )
    }

    else {

        return (
            <div className={`${styles.box} ${styles.lofi}`} >
            <div className={styles.boxClimateSearch}>
              <SearchBar />
              <Climate />
            </div>
            <MusicList />
          </div>
        )
    }
}