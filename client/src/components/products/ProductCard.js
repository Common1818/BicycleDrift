import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToCart } from "../../actions/cart";
import cartGif from "./cartGif.gif";
import $ from "jquery";
import "./css/ProductCard.css";

const ProductCard = ({
  product: {
    _id,
    name,
    brand,
    price,
    images,
    description,
    modelyear,
    gender,
    category,

    actualPrice,
    color,
  },
  addProductToCart,
}) => {
  const handleHover = (id) => {
    $(`.hover${id}`).addClass("animate");
  };
  console.log(actualPrice);
  const handleLeave = (id) => {
    $(`.hover${id}`).removeClass("animate");
  };

  const handleCart = (e) => {
    e.preventDefault();
    console.log("s");
    $(".add-to-cart-gif img").attr("src", cartGif);
    $(".add-to-cart-gif img").addClass("visible");
    setTimeout(() => {
      $(".add-to-cart-gif img").removeClass("visible");
    }, 3000);

    addProductToCart({
      _id,
      name,
      brand: brand.brandname,
      price,
      color,
      image: images[0],
      actualPrice,
      quantity: 1,
    });
  };

  return (
    <Fragment>
      <div id="make-3D-space">
        <div
          id="product-card"
          className={"hover" + _id}
          onMouseOver={() => handleHover(_id)}
          onMouseLeave={() => handleLeave(_id)}
        >
          {actualPrice && actualPrice !== price ? (
            <div className="sale-banner">
              {parseInt(((actualPrice - price) / actualPrice) * 100)}
              {" % OFF"} {"  "}save {"  "} &#8377;{actualPrice - price}
            </div>
          ) : null}
          <div id="product-front">
            <div className="shadow"></div>
            <img
              className="test"
              src={images[0]}
              alt={description && description}
            />
            <div className="image_overlay"></div>
            <div id="view_details">
              <Link to={"/product/" + _id}>View details</Link>
            </div>
            <div className="stats">
              <div className="stats-container">
                <span className="product_price">
                  &#8377; {price}
                  <br></br>{" "}
                  <s style={{ color: "red" }}>&#8377; {actualPrice}</s>{" "}
                </span>
                <span className="product_name">
                  {" "}
                  {name} {modelyear && modelyear}
                </span>
                <p>
                  <strong>{color && color}</strong>{" "}
                  <strong>{gender && gender}</strong>
                </p>

                <div className="product-options">
                  <ul>
                    {brand && <li>Brand: {brand.brandname}</li>}
                    {category && <li>Category: {category.name}</li>}
                    {/* stars */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-bottom">
          <div id="product-bottom-card">
            <Link to={"/product/" + _id} className="btn btn--primary">
              Buy Now
            </Link>
            <button
              onClick={handleCart}
              className="btn btn--primary float-right add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { addProductToCart })(ProductCard);
