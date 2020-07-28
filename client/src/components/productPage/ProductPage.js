import React from "react";
import "./css/ProductPage.css";
import CustomerReviews from "./CustomerReviews";
import Specifications from "./Specifications";
import ProductHeading from "./ProductHeading";
import ProductDesktop from "./ProductDesktop";
import ProductDescription from "./ProductDescription";
import ProductMobile from "./ProductMobile";

const ProductPage = () => {
  return (
    <div class="fluid-container p-4 m-2">
      <div class="row product-container">
        <div class=" product-image col-lg-7">
          <ProductHeading />

          <ProductDesktop />
          <ProductMobile />
        </div>
        <ProductDescription />
      </div>

      <hr class="hr-4"></hr>
      <Specifications />
      <CustomerReviews />
    </div>
  );
};

export default ProductPage;
