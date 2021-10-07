import { createContext, useEffect } from "react";
import getPlaylist from "../../services/LastFm";


export const MusicListContext = createContext();

export const MusicListProvider = (props) =>{



useEffect(()=>{

    getPlaylist(genre).then(data => console.log(data))

},[])


    return(

      <MusicListContext.Provider>

          {props.children}
      </MusicListContext.Provider>
    )
}