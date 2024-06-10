import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { LuChevronsUpDown } from "react-icons/lu";
import { TiWeatherCloudy } from "react-icons/ti";

const WeatherForecast = ({ forecastData }) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .splice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  const dailyGridItem = "flex items-center h-[30px] justify-between mx-4";

  return (
    <>
      <h3 className="text-xl font-[600] ml-4">Weekly Forecast</h3>

      <Accordion allowZeroExpanded className="cursor-pointer">
        {forecastData.list.splice(0, 7).map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="bg-[#f5f5f5] hover:bg-gray-200 rounded-2xl h-10 m-2 flex items-center text-lg px-5 py-6 cursor-pointer ">
                    <div className="flex items-center">
                      <img
                        src={`icons/${item.weather[0].icon}.png`}
                        alt="weather"
                        className="w-10"
                      />

                      <label className="text-[#212121] grow shrink font-[600] ml-4">
                        {forecastDays[index]}
                      </label>
                    </div>

                    <label className="grow shrink mr-4 text-right">
                      {item.weather[0].description}
                    </label>
                    <label className="text-[#757575] ">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                    <div className="ml-4 text-[#99c3eb]">
                      <LuChevronsUpDown />
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid-x-0 grid-y-4 grid grow shrink grid-cols-auto-2 py-1 px-4 gap-x-0 gap-y-4">
                  <div className={dailyGridItem}>
                    <label className="text-[#757575]">Pressure</label>
                    <label className="text-[#212121]">
                      {item.main.pressure} hPa
                    </label>
                  </div>

                  <div className={dailyGridItem}>
                    <label className="text-[#757575]">Humidity</label>
                    <label className="text-[#212121]">
                      {item.main.humidity}%
                    </label>
                  </div>

                  <div className={dailyGridItem}>
                    <label className="text-[#757575]">Clouds</label>
                    <label className="text-[#212121]">{item.clouds.all}%</label>
                  </div>

                  <div className={dailyGridItem}>
                    <label className="text-[#757575]">Wind Speed</label>
                    <label className="text-[#212121]">
                      {item.wind.speed} m/s
                    </label>
                  </div>

                  <div className={dailyGridItem}>
                    <label className="text-[#757575]">Sea Level</label>
                    <label className="text-[#212121]">
                      {item.main.sea_level}m
                    </label>
                  </div>

                  <div className={dailyGridItem}>
                    <label className="text-[#757575]">Feels Like</label>
                    <label className="text-[#212121]">
                      {Math.round(item.main.feels_like)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default WeatherForecast;
