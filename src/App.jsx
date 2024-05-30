import "./index.css";
import Search from "./components/searchBar/Search";
import WeatherForecast from "./components/currentWeather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log("from app", searchData);
  };
  return (
    <div className="container bg-[#d5d4d4] py-10">
      <Search onSearchChange={handleOnSearchChange} />
      <WeatherForecast />
    </div>
  );
}

export default App;
