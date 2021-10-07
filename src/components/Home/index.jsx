import styles from "../../styles/Home/Home.module.css";
import Climate from "./Climate";
import MusicList from "./MusicList";
import SearchBar from "./SearchBar";

export default function Weather() {

  
  return (
    <div className={styles.box} style={{backgroundColor:"red"}} >
      <div className={styles.boxClimateSearch}>
        <SearchBar />
        <Climate />
      </div>
      <MusicList />
    </div>
  );
}
