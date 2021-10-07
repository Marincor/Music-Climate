import { MusicListProvider } from "../contexts/MusicList";
import { SearchBarProvider } from "../contexts/SearchBar";
import { WeatherProvider } from "../contexts/Weather";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SearchBarProvider>
      <WeatherProvider>
        <MusicListProvider />
        <Component {...pageProps} />
      </WeatherProvider>
    </SearchBarProvider>
  );
}

export default MyApp;
