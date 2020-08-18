import React from "react";
import BDloader from "./BDloader.gif";
import "./loader.css";

const Loader = () => {
  return (
    <div className="container-sm loader-container">
      <img className="loader" src={BDloader} alt="Now loading" />
    </div>
  );
};

export default Loader;
