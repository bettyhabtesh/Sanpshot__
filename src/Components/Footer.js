/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Link to="/about" className="text-white ml-10 ">
        AboutUs
      </Link>
    </div>
  );
};

export default Footer;
