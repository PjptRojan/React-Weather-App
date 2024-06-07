import LoadingSpinner from "../loadingspinner/LoadingSpinner";
import rain from "../../weatherAnimation/rain.gif";

const WeatherForecast = ({ weatherData, isLoading }) => {
  const weatherLabels = "text-left font-[500] text-md";
  const weatherDetails = "text-right font-[600] text-md";
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full mt-5 ">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="w-[400px] rounded-md shadow-customShadow my-10 mx-auto text-white bg-[#333] px-[20px] py-[20px] ">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-[600] text-[18px] leading-4 m-0 tracking-wide">
                {weatherData.city}
              </p>
              <p className="font-[400] text-[14px] leading-4 m-0">
                {weatherData.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="w-[110px]"
              // src={`icons/${weatherData.weather[0].icon}.png`}
              src={rain}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-[600] text-[70px] w-auto tracking-tighter my-3">
              {Math.round(weatherData.main.temp)}°C
            </p>
            <div className="w-full pl-10">
              <span className={weatherLabels}>Weather Details</span>
              <div className="flex justify-between">
                <span className={weatherLabels}>Feels Like</span>
                <span className={weatherDetails}>
                  {Math.round(weatherData.main.feels_like)}°C
                </span>
              </div>
              <div className="flex justify-between">
                <span className={weatherLabels}>Wind</span>
                <span className={weatherDetails}>
                  {Math.round(weatherData.wind.speed)} km/h
                </span>
              </div>
              <div className="flex justify-between">
                <span className={weatherLabels}>Humidity</span>
                <span className={weatherDetails}>
                  {weatherData.main.humidity}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className={weatherLabels}>Pressure</span>
                <span className={weatherDetails}>
                  {weatherData.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherForecast;
