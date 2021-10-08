import styles from "../../styles/Page404/ErrorPage404.module.css";
import Lottie from 'react-lottie';
import { defaultOptions } from "./lottieConfig";
import Link from 'next/link'

export default function ErrorPage404() {
  return (
    <div className={styles.boxError}>
      <div className={styles.boxLottie}>
        <Lottie options={defaultOptions} height={200} width={300} />
      </div>
      <div>
        <h1 className={styles.titleError}>Nothing here...</h1>
        <Link passHref href="/"> 
        <button className={styles.buttonError}>comeback</button>
        </Link>
      </div>
    </div>
  );
}
