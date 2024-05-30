import "./App.css";
import Search from "./components/searchBar/Search";
import WeatherForecast from "./components/weatherforecast/WeatherForecast";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log("from app", searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <WeatherForecast />
    </div>
  );
}

export default App;
