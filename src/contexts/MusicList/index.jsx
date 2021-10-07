import { createContext, useEffect, useState } from "react";
import getPlaylist from "../../services/LastFm";

export const MusicListContext = createContext();

export const MusicListProvider = (props) => {
  const [genre, setGenre] = useState("");
  const [musicList, setMusicList] = useState();

  useEffect(() => {
    getPlaylist(genre).then(data => setMusicList(data.tracks.track));
  }, [genre]);


  return (
    <MusicListContext.Provider value={{genre, setGenre,musicList, setMusicList }}>{props.children}</MusicListContext.Provider>
  );
};
