import React from "react";

const Search = () => {
  return (
    <div className="search-field">
      <input className="search-field__input" type="text" placeholder="Search for any IP address or domain" />
      <button className="search-field__btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
