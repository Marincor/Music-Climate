
import Lottie from "react-lottie";
import { defaultOptions } from "./lottieConfig";
import styles from "../../styles/SavedList/List.module.css";

export default function Loading() {


  return (
    <>
   
        <div className={styles.boxLottie}>
          <Lottie options={defaultOptions} height={250} width={300} />
          <h1 className={styles.loadingTitle}>Loading Your List...</h1>
        </div>

    </>
  );
}
