import { createContext, useEffect, useState } from "react";
import getPlaylist from "../../services/LastFm";

export const MusicListContext = createContext();

export const MusicListProvider = (props) => {
  const [genre, setGenre] = useState("");
  const [musicList, setMusicList] = useState();
  const [savedMusicList, setSavedMusicList] = useState([]);

  useEffect(() => {
    getPlaylist(genre).then((data) => setMusicList(data.tracks.track));

    const currentStorageItens = JSON.parse(localStorage.getItem('SAVED_LIST')) || []

    setSavedMusicList(currentStorageItens)

  }, [genre]);

  return (
    <MusicListContext.Provider
      value={{
        genre,
        setGenre,
        musicList,
        setMusicList,
        savedMusicList,
        setSavedMusicList,
      }}
    >
      {props.children}
    </MusicListContext.Provider>
  );
};
