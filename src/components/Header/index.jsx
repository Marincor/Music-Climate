import Sun from "../../../public/assets/img/sun.svg";
import Music from "../../../public/assets/img/music.svg";
import styles from "../../styles/Header/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  return (
    <header className={styles.header}>
       <div>
        <ToastContainer />
      </div>
        <Image
          src={Music}
          alt="music-icon"
          className={styles.logo}
          width="20px"
          height="20px"
        />
      <Link passHref href="/">
        <h1 className={styles.title}>Music Climate</h1>
        </Link>
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
