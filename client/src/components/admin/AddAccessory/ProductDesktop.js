import React from "react";
import $ from "jquery";
import addImage from "./images/addImage.PNG";
// import "./css/ProdutDesktop.css";
// import { create } from "../../../../../models/Bicycle";

const ProductDesktop = ({ img1, img2, img3, img4 }) => {
  const handlePreview = (value, imgclass) => {
    value != ""
      ? $(`.${imgclass}`).attr("src", value)
      : $(`.${imgclass}`).attr("src", addImage);
  };

  const handleString = (string) => {
    var imageUrl = "http://drive.google.com/uc?export=view&id=";
    var splittedString = string.split("/d/")[1];
    if (splittedString == null) {
      imageUrl = string;
      return imageUrl;
    } else {
      const imageId = splittedString.split("/")[0];
      imageUrl += imageId;
      return imageUrl;
    }
  };

  return (
    <div class="row product-image-container desktop">
      <div class="col-sm-2">
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img1(handleString(e.target.value));
              handlePreview(handleString(e.target.value), "prod-img-1");
            }}
          />
          <img className="prod-img-1" src={addImage} alt=""></img>
        </div>
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img2(handleString(e.target.value));
              handlePreview(handleString(e.target.value), "prod-img-2");
            }}
          />
          <img className="prod-img-2" src={addImage} alt=""></img>
        </div>
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img3(handleString(e.target.value));
              handlePreview(handleString(e.target.value), "prod-img-3");
            }}
          />
          <img className="prod-img-3" src={addImage} alt=""></img>
        </div>
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img4(handleString(e.target.value));
              handlePreview(handleString(e.target.value), "prod-img-4");
            }}
          />
          <img className="prod-img-4" src={addImage} alt=""></img>
        </div>
      </div>
      <div class="col-sm-10 ">
        <img className="display-image prod-img-1" src={addImage} alt=""></img>
      </div>
    </div>
  );
};

export default ProductDesktop;
