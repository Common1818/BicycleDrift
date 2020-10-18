import React from "react";
import $ from "jquery";
import "./css/ProductMobile.css";
import bikeBanner from "./images/bikeBanner.webp";
const ProductMobile = ({ images }) => {
  const changeDisplayImage = (tempSource) => {
    $(".cover-image img").removeAttr("src");
    $(".cover-image img").attr("src", tempSource);
  };
  const imagesArray = images && images;
  var k = 0;
  return (
    <div className="product-image-container mobile">
      <div className="cover-image">
        <img src={imagesArray && imagesArray[0]} alt="" />
      </div>
      <div className="not-cover-image">
        {imagesArray &&
          imagesArray.map((image) => {
            k++;
            return (
              <div key={k}>
                <img
                  onClick={(e) => {
                    changeDisplayImage(e.target.src);
                  }}
                  src={image ? image : bikeBanner}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductMobile;
