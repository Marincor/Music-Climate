import { createContext, useState } from "react";

export const SearchBarContext = createContext();

export const SearchBarProvider = (props) => {

    const [inputValue, setInputValue] = useState()
  return (
    <SearchBarContext.Provider value={{inputValue, setInputValue}}>{props.children}</SearchBarContext.Provider>
  );
};
