import Sun from "../../../public/assets/img/sun.svg";
import Music from "../../../public/assets/img/music.svg";
import styles from "../../styles/Header/header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={Music}
        alt="music-icon"
        className={styles.logo}
        width="20px"
        height="20px"
      />
      <h1 className={styles.title}>Music Climate</h1>
      <Image
        src={Sun}
        alt="sun-icon"
        className={styles.logo}
        width="20px"
        height="20px"
      />
    </header>
  );
}
