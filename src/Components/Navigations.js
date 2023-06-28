/** @format */

import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const Navigations = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData } = useContext(ImageContext);
  const handleButtonMountain = () => {
    fetchData(
      `search/photos?page=1&query=mountain&client_id=${process.env.REACT_APP_API_KEY}`
    );
    setSearchValue("");
    //setSearchImage(searchValue);
  };
  const handleButtonBeach = () => {
    fetchData(
      `search/photos?page=1&query=beach&client_id=${process.env.REACT_APP_API_KEY}`
    );
    setSearchValue("");
    //setSearchImage(searchValue);
  };
  const handleButtonBird = () => {
    fetchData(
      `search/photos?page=1&per_page=20&query=bird&client_id=${process.env.REACT_APP_API_KEY}`
    );
    setSearchValue("");
    //setSearchImage(searchValue);
  };
  const handleButtonFood = () => {
    fetchData(
      `search/photos?page=1&per_page=20&query=food&client_id=${process.env.REACT_APP_API_KEY}`
    );
    setSearchValue("");
    //setSearchImage(searchValue);
  };
  return (
    <div className="bg-violet-400 flex item-center mx-auto w-full py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 item-center mx-auto w-full">
        <button
          onClick={handleButtonMountain}
          className="bg-purple-700  px-3 py-2.5 item-center mx-auto text-white font-bold  rounded hover:bg-purple-400"
        >
          Mountains
        </button>
        <button
          onClick={handleButtonBeach}
          className="bg-purple-700 px-3 py-1.5 item-center mx-auto text-white font-bold  rounded hover:bg-purple-400"
        >
          Beaches
        </button>
        <button
          onClick={handleButtonBird}
          className="bg-purple-700 px-3 py-2.5 item-center mx-auto text-white font-bold  rounded  hover:bg-purple-400"
        >
          Birds
        </button>
        <button
          onClick={handleButtonFood}
          className="bg-purple-700 px-3 py-2.5 item-center mx-auto text-white font-bold  rounded  hover:bg-purple-400 "
        >
          Food
        </button>
      </div>
    </div>
  );
};

export default Navigations;
