import { useContext, useEffect } from "react";
import { MusicListContext } from "../../contexts/MusicList";
import changeBackground from "../functions/Background/changeBg";


export default function Weather() {
  const { genre } = useContext(MusicListContext);

  return changeBackground(genre);
}
