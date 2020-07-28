import React from "react";
import "./css/ProductDesktop.css";
import $ from "jquery";
const ProductDesktop = () => {
  const changeDisplayImage = (tempSource) => {
    $(".display-image").removeAttr("src");
    $(".display-image").attr("src", tempSource);
  };

  return (
    <div class="row product-image-container desktop">
      <div class="col-sm-2">
        <div class="row">
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Madrock_Blue_2019_07.png"
            alt=""
          ></img>
        </div>
        <div class="row">
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/montra-rock-2-1-27-5-2018-4.jpg"
            alt=""
          ></img>
        </div>
        <div class="row">
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/montra-rock-2-1-27-5-2018-3.jpg"
            alt=""
          ></img>
        </div>
        <div class="row">
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/montra-rock-2-1-27-5-2018-6.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div class="col-sm-10 ">
        <img
          className="display-image"
          src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Madrock_Blue_2019_07.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ProductDesktop;
