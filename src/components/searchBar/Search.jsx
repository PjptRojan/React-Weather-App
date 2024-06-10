import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [searchError, setSearchError] = useState({
    message: "",
  });

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => {
        setSearchError({ ...searchError, message: err.message });
      });
  };

  const handleOnChange = (inputValue) => {
    setSearch(inputValue);
    onSearchChange(inputValue);
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={700}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />

      {searchError.message && (
        <p className="text-red-400 font-[500] text-center mt-3">
          {searchError.message}!!
        </p>
      )}
    </>
  );
};

export default Search;
