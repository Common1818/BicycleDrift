import React from "react";
import "./css/Shop.css";
import ForKids from "./Images/ForKids.png";
import ForAdults from "./Images/ForAdults.png";
import Accessories from "./Images/Accessories.png";

const Shop = () => {
  return (
    <div className="shop-now ">
      <div className="row">
        <div className="col-sm-5">
          <img src={ForKids} alt="" />
        </div>
        <div className="col-sm-7">
          <img src={ForAdults} alt="" />
          <img src={Accessories} className="mobile-hide" alt="" />
        </div>
      </div>

      <img src={Accessories} alt="" className="mobile-visible" />
    </div>
  );
};

export default Shop;
