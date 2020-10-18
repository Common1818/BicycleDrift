import React from "react";
import "./css/ProductDesktop.css";
import $ from "jquery";
import bikeBanner from "./images/bikeBanner.webp";
const ProductDesktop = ({ images }) => {
  const changeDisplayImage = (tempSource) => {
    $(".display-image").removeAttr("src");
    $(".display-image").attr("src", tempSource);
  };

  const imagesArray = images && images;
  return (
    <div className="row product-image-container desktop">
      <div className="col-sm-2">
        {imagesArray &&
          imagesArray.map((image) => {
            console.log(image == "");
            return (
              <div key={image} className="row">
                <img
                  onClick={(e) => {
                    changeDisplayImage(e.target.src);
                  }}
                  src={image ? image : bikeBanner}
                  alt=""
                ></img>
              </div>
            );
          })}
      </div>
      <div className="col-sm-10 ">
        <img
          className="display-image"
          src={imagesArray && imagesArray[0]}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ProductDesktop;
