import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGeolocation } from "../../redux/geo.slice";
import "./Search.scss"

// @ts-ignore
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const setLocation = (address: String) => {
    // @ts-ignore
    dispatch(getGeolocation(address))
  }

  return (
    <div className="search-field">
      <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className="search-field__input" type="text" placeholder="Search for any IP address or domain" />
      <button onClick={() => setLocation(searchValue)} className="search-field__btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
