import "./App.css";
import Search from "./components/searchBar/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log("from app", searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
