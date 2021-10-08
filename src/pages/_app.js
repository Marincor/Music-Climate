import { LoadingProvider } from "../contexts/Loading";
import { MusicListProvider } from "../contexts/MusicList";
import { SearchBarProvider } from "../contexts/SearchBar";
import { WeatherProvider } from "../contexts/Weather";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <SearchBarProvider>
        <WeatherProvider>
          <MusicListProvider>
            <Component {...pageProps} />
          </MusicListProvider>
        </WeatherProvider>
      </SearchBarProvider>
    </LoadingProvider>
  );
}

export default MyApp;
