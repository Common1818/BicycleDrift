import React, { useEffect } from "react";
import $ from "jquery";
import "./css/ProductPage.css";
import CustomerReviews from "./CustomerReviews";
import Specifications from "./Specifications";
import ProductHeading from "./ProductHeading";
import ProductDesktop from "./ProductDesktop";
import ProductDescription from "./ProductDescription";
import ProductMobile from "./ProductMobile";
import { connect } from "react-redux";
import { fetchBike } from "../../actions/product";
import ProductAdminSection from "./ProductAdminSection";
import Loader from "../layout/Loader";
import AboutBrand from "./AboutBrand";

const ProductPage = ({
  isAdmin,
  loading,
  fetchBike,
  match: {
    params: { productId },
  },
  product: { product },
}) => {
  useEffect(() => {
    fetchBike(productId);

    $(window).scroll(function () {
      const divOffset = $(".about-page-container .description").offset();
      const topOffset = divOffset && divOffset.top;
      if (window.scrollY > topOffset - 700) {
        $(".about-page-container .description").addClass("show");
      }
    });
  }, []);

  const specifications = product && product.specifications;
  const modelyear = product && product.modelyear;
  const gender = product && product.gender;
  const category = product && product.category;
  const description = product && product.description;

  const stock = product && product.stock;
  const minAge = product && product.age.min;
  const maxAge = product && product.age.max;
  const name = product && product.name;
  const id = product && product._id;
  const brand = product && product.brand;
  const price = product && product.price;
  const actualPrice = product && product.actualPrice;
  const images = product && product.images;
  const color = product && product.color;

  var isLoading;

  isLoading = loading;

  return (
    <div class="fluid-container p-4 m-2">
      {isLoading == null ? (
        <Loader />
      ) : (
        <>
          <div class="row product-container">
            <div className="add-to-cart-gif">
              <img src="" alt="" srcset="" />
            </div>
            <div class=" product-image col-lg-7">
              <ProductHeading name={name} modelyear={modelyear} />

              <ProductDesktop images={images} />
              <ProductMobile images={images} />
            </div>
            <ProductDescription
              _id={id}
              brand={brand}
              color={color}
              images={images}
              description={description}
              category={category}
              name={name}
              modelyear={modelyear}
              gender={gender}
              price={price}
              actualPrice={actualPrice}
              stock={stock}
              minAge={minAge}
              maxAge={maxAge}
            />
          </div>

          <hr class="hr-4"></hr>

          <Specifications specifications={specifications} />
          <hr />
          <AboutBrand product={product} />
          <CustomerReviews />
          {isAdmin ? (
            <ProductAdminSection productId={productId} product={product} />
          ) : null}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.isAdmin,
  product: state.product,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { fetchBike })(ProductPage);
