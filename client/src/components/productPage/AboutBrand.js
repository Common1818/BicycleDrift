import React from "react";
import "./css/AboutBrand.css";

const AboutBrand = ({ product }) => {
  const brand = product && product.brand;
  return (
    <div className="about-page-container container">
      <h2>About the Brand</h2>
      <div className="row">
        <div className="col-sm-4">
          <img src={brand && brand.brandLogoUrl} alt="" />
        </div>
        <div className="col-sm-8">
          <div className="description">{brand && brand.description}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;
