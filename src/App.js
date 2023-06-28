/** @format */

import React, { createContext, useState } from "react";
import Data from "./utils/Data";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

export const ImageContext = createContext();

function App() {
  const [searchImage, setsearchImage] = useState("");
  const { response, fetchData } = Data(
    `search/photos?page=1&per_page=20&query=mountain&client_id=${process.env.REACT_APP_API_KEY}`
  );

  const value = {
    response,
    fetchData,
    searchImage,
    setsearchImage,
  };

  return (
    <div className="  bg-violet-400 ">
      <ImageContext.Provider value={value}>
        <Home />
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
