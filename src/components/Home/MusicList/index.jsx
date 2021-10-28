import { Button } from "@mui/material";
import { useContext } from "react";
import { MusicListContext } from "../../../contexts/MusicList";
import { WeatherContext } from "../../../contexts/Weather";
import styles from "../../../styles/Home/Home.module.css";
import TableList from "./Table";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MusicList() {
  const { currentWeather } = useContext(WeatherContext);
  const { musicList, genre, savedMusicList, setSavedMusicList } =
    useContext(MusicListContext);

  const notify = () => toast.success("Your list has been saved!");

  function getCurrentList() {
    const arr = savedMusicList || [];
    const obj = {
      date: currentWeather?.date,
      list: musicList,
      temperature: currentWeather?.temperature,
      city: currentWeather?.city,
      category: genre,
      id: Math.round(Math.random() * 4568),
    };

    arr.push(obj);
    setSavedMusicList(arr);

    localStorage.setItem("SAVED_LIST", JSON.stringify(arr));
    notify();
  }

  return (
    <div className={styles.musicBox}>
     
      <TableList />
      <div>
        <Button variant="contained" color="primary" onClick={getCurrentList}>
          Save list
        </Button>
        {""} {" - "}
        <>
          <Link passHref className={styles.link} href="/list">
            <Button variant="contained" color="inherit">
              your list ⮡
            </Button>
          </Link>
        </>
      </div>
    </div>
  );
}
