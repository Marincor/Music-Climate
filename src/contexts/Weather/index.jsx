import { useState, useEffect, createContext } from "react";
import getWeather from "../../services/Weather";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [currentWeather, setCurrentWeather] = useState();
  const [currentCity, setCurrentCity] = useState("Maceio");

  useEffect(() => {
    // getting date //
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getUTCMonth() + 1;
    const currentYear = date.getUTCFullYear();

    getWeather(currentCity).then((data) =>
      setCurrentWeather({
        city: data?.location?.city,
        country: data?.location?.country,
        condition: data?.current_observation.condition?.text,
        temperature: data?.current_observation.condition?.temperature,
        date: `${currentMonth}/${currentDay}/${currentYear}`,
      })
    );
  }, [currentCity]);

  return (
    <WeatherContext.Provider
      value={{ currentWeather, setCurrentWeather, currentCity, setCurrentCity }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
