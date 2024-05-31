import Search from "./components/searchBar/Search";
import WeatherForecast from "./components/currentWeather/CurrentWeather";
import {
  CURRENT_WEATHER_API_KEY,
  CURRENT_WEATHER_API_URL,
} from "./components/api/api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    setIsLoading(true);
    const currentWeatherFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );
    console.log("weatherfetch", currentWeatherFetch);
    const status = currentWeatherFetch.status;
    console.log("promise status is", status);
    const forecastFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        console.log("1", weatherResponse);
        const forecastResponse = await response[1].json();
        console.log(forecastResponse);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  };

  console.log("currentWeather", currentWeather);
  console.log("forecast", forecast);

  return (
    <div className="container bg-[#d5d4d4] py-10 mt-10 rounded-md min-h-[150px]">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && (
        <WeatherForecast weatherData={currentWeather} isLoading={isLoading} />
      )}
    </div>
  );
}

export default App;
