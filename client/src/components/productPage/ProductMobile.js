import React from "react";
import $ from "jquery";
import "./css/ProductMobile.css";

const ProductMobile = () => {
  const changeDisplayImage = (tempSource) => {
    $(".cover-image img").removeAttr("src");
    $(".cover-image img").attr("src", tempSource);
  };

  return (
    <div className="product-image-container mobile">
      <div className="cover-image">
        <img
          src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Madrock_Blue_2019_07.png"
          alt=""
        />
      </div>
      <div className="not-cover-image">
        <div>
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Madrock_Blue_2019_07.png"
            alt=""
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/montra-rock-2-1-27-5-2018-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/montra-rock-2-1-27-5-2018-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              changeDisplayImage(e.target.src);
            }}
            src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/montra-rock-2-1-27-5-2018-6.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMobile;
