import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGeolocation } from "../../redux/geo.slice";
import { AppDispatch } from "../../redux/store";
import "./Search.scss";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const setLocation = (e: any, address: String) => {
    e.preventDefault();
    dispatch(getGeolocation(address));
  };

  return (
    <form>
      <div className="search-field">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="search-field__input"
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button
          onClick={(e) => setLocation(e, searchValue)}
          className="search-field__btn"
          type="submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
