import React from "react";
import loading from "./loading.gif";

const Loader = () => {
  return (
    <div className="container-sm">
      <img src={loading} alt="Now loading" />
    </div>
  );
};

export default Loader;
