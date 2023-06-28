/** @format */

import React from "react";
import { useContext } from "react";
import { ImageContext } from "../App";
import Picture from "../Assets/Picture";

const Posts = () => {
  const { response, searchImage } = useContext(ImageContext);
  return (
    <div className="bg-violet-400 ">
      <h1 className="text-center  text-white font-bold text-3xl">
        {searchImage} Pictures
      </h1>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10
      max-w-7xl mx-auto px-4"
      >
        {response.map((data, key) => (
          <Picture key={key} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
