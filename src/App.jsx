import Search from "./components/searchBar/Search";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { CURRENT_WEATHER_API_URL } from "./components/api/api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("current weather", currentWeather);
  console.log(" forecast", forecast);

  const handleOnSearchChange = async (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        setIsLoading(true);
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const sunriseTimeStamp = currentWeather?.sys?.sunrise;
  const sunsetTimeStamp = currentWeather?.sys?.sunset;

  const timeStampToLocalStr = (timeStamp) => {
    const sunriseDate = new Date(timeStamp * 1000);
    const sunsetDate = new Date(timeStamp * 1000);

    const sunriseLocalStr = sunriseDate.toLocaleString("ne-NP", {
      timeZoneName: "short",
    });

    return sunriseLocalStr, sunsetDate;
  };

  return (
    <div className="container bg-[#d5d4d4] py-10 my-10 rounded-md min-h-[150px]">
      <Search onSearchChange={handleOnSearchChange} />
      {!currentWeather && !forecast && (
        <p className="text-lg font-[500] text-center mt-6 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
          Get{" "}
          <span className="font-[600] text-red-500 text-2xl ">real-time</span>{" "}
          weather updates for any city around the world.
        </p>
      )}

      <div>
        Sunrise: {timeStampToLocalStr(sunriseTimeStamp)}/ Sunset:{" "}
        {timeStampToLocalStr(sunsetDate)}
      </div>
      {currentWeather && (
        <CurrentWeather weatherData={currentWeather} isLoading={isLoading} />
      )}
      {forecast && currentWeather && (
        <WeatherForecast forecastData={forecast} />
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
