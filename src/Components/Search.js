/** @format */

import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&per_page=20&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`
    );
    setSearchValue("");
    //setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&per_page=20&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      setSearchValue("");
      //setSearchImage(searchValue);
    }
  };
  return (
    <div className="bg-violet-500  items-center py-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-5xl font-bold mb-5 font-serif">
          Snapshot
        </h1>
      </div>
      <div className="flex item-center mx-auto">
        <input
          className="bg-gray-50 border border-violet-400 text-sm w-full indent-2 p-2.5 outline-none focus:border-pink-200 focus:ring-2 rounded-tl rounded-bl "
          type="search"
          placeholder="Search. . ."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
        <button
          onClick={handleButtonSearch}
          className="bg-purple-700 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-200 disabled:bg-violet-400  hover:bg-purple-400 curser "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
