import { useContext } from "react";
import { SearchBarContext } from "../../../contexts/SearchBar";
import { WeatherContext } from "../../../contexts/Weather";
import styles from "../../../styles/Home/Home.module.css";

export default function SearchBar() {
  const { currentCity, setCurrentCity } = useContext(WeatherContext);
  const { inputValue, setInputValue } = useContext(SearchBarContext);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleForm() {

	setCurrentCity(inputValue)
  }

 
  return (
   <form onSubmit={(e)=>{ e.preventDefault();handleForm()}}>


	   <input
	 
		 value={inputValue}
		 onChange={handleInput}
		 type="search"
		 placeholder=" 🏙️city"
		 className={styles.search}
	   />
   </form>
    
  );
}
