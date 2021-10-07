import { useContext, useEffect } from "react";
import { MusicListContext } from "../../contexts/MusicList";
import changeBackground from "../functions/Background/changeBg";
import Lottie from "react-lottie";
import {
  defaultOption3,
  defaultOption4,
  defaultOptions,
  defaultOptions2,
} from "./LottieConfig";
import styles from "../../styles/Home/Home.module.css";
import { LoadingContext } from "../../contexts/Loading";

export default function Weather() {
  const { genre } = useContext(MusicListContext);

  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading("cities");
    }, 4000);

    setTimeout(() => {
      setLoading("music");
    }, 8000);

    setTimeout(() => {
      setLoading("git");
    }, 13000);

    setTimeout(() => {
      setLoading(false);
    }, 18000);


  }, []);
  

  function renderContent() {
    if (loading === true) {
      return (
        <div className={styles.boxLottie}>
          <Lottie options={defaultOptions} height={100} width={500} />
          <h2 className={styles.loadText}>Loading...</h2>
        </div>
      );
    }
    if (loading === "cities") {
      return (
        <div className={styles.boxLottie}>
          <Lottie options={defaultOptions2} height={100} width={500} />
          <h2 className={styles.loadText}>
            When the application opens, type a city through the search bar...
          </h2>
        </div>
      );
    }
    if (loading === "music") {
      return (
        <div className={styles.boxLottie}>
          <Lottie options={defaultOption3} height={300} width={400} />
          <h2 className={styles.loadText}>
            Based on the temperature of the chosen city we will suggest a
            personalized music list for you. Enjoy!
          </h2>
        </div>
      );
    }

    if (loading === "git") {
      return (
        <div className={styles.boxLottie}>
          <Lottie options={defaultOption4} height={300} width={400} />
          <h2 className={styles.loadText}>
            Access my github for more, in: https://github.com/marincor
          </h2>
        </div>
      );
    } else {
      return changeBackground(genre);
    }
  }

  return <>{renderContent()}</>;
}
