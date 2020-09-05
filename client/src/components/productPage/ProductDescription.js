/*eslint-disable */
import React, { useState } from "react";
import $ from "jquery";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { createOrder } from "../../actions/order";
import { checkPincode } from "../../actions/pincode";
import { addProductToCart } from "../../actions/cart";
import cartGif from "../products/cartGif.gif";
import "./css/ProductDescription.css";
import Loader from "../layout/Loader";

const ProductDescription = ({
  name,
  modelyear,
  gender,
  category,
  description,
  price,
  actualPrice,
  stock,
  checkPincode,
  isServiceable,
  minAge,
  maxAge,
  Loading,
  addProductToCart,
  _id,
  images,
  color,
  brand,
  pincodeData,
  createOrder,
  order,
}) => {
  var message;
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

  const categoryName = category && category.name;
  const [pincode, setpincode] = useState("");
  const [loading, setloading] = useState(false);

  var stockNumber = 0;
  stockNumber = stock && stock;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pincode.length < 6 || pincode.length > 6) {
      window.alert("Enter a Valid pincode");
    } else {
      $(".checking").css("display", "block");
      localStorage.setItem("pincode", pincode);

      setloading(true);
      checkPincode({ pincode });
    }
  };

  message =
    isServiceable === null
      ? ""
      : isServiceable === true
      ? "Pincode is Serviceable, Order Now"
      : "Pincode is not Serviceable, Contact Customer Support for more options";

  if (Loading === false || Loading === null) {
    $(".checking").css("display", "none");
  }
  const { Serviceable, deliveryCharge } = pincodeData;

  const handleBuyNow = (e) => {
    e.preventDefault();
    if (stock !== 0) {
      createOrder({
        products: [
          {
            _id,
            name,
            brand: brand.brandname,
            price,
            color,
            image: images[0],
            actualPrice,
            quantity: 1,
          },
        ],
        total: price + deliveryCharge,
        totalQuantity: 1,
      });
    } else {
      window.alert("Sorry this Product is currently out of stock");
    }
  };
  const { redirect } = order;
  const orderId = order.order._id;
  if (redirect === true) {
    localStorage.setItem("cart", JSON.stringify([]));
    return <Redirect to={"/order/" + orderId} />;
  }

  return (
    <div className="product-description col-lg-5">
      <main className="card main-grid">
        {actualPrice && actualPrice !== price ? (
          <div className="sale-banner">
            {actualPrice ? (
              <marquee behavior="" direction="">
                ON SALE {parseInt(((actualPrice - price) / actualPrice) * 100)}
                {" % OFF"}
              </marquee>
            ) : null}
          </div>
        ) : null}
        <div className="card__content">
          <div className="card__head">
            <h2>
              <small style={{ fontSize: "1rem" }}>
                {gender && gender} {">"} {minAge && minAge}
                {"-"}
                {maxAge && maxAge} years {">"}{" "}
                <small style={{ fontSize: "1rem" }}>
                  {categoryName && categoryName}
                </small>
              </small>
              <br />
              {name && name} <br /> ({modelyear && modelyear})
            </h2>
            <div style={{ fontSize: "1.2rem" }} className="card__text">
              {description && description}
              <ul className="description-promise">
                <li>Fre Home Delivery</li>
                <li>Fully Fitted ready to ride</li>
                <li>Free accessories worth 500</li>
              </ul>
            </div>
            <p className="card__price">
              &#8377; {price && price}
              <sub>
                {" "}
                <s style={{ color: "red" }}>&#8377; {actualPrice}</s>
              </sub>
            </p>
          </div>
          <div className="pincode__check">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => {
                  setpincode(e.target.value);
                }}
                style={{ fontSize: "1.2rem" }}
                type="number"
                className="pincode-input"
                placeholder="Enter pincode to Buy Now"
                name="pincode"
              />

              {pincode.loading ? (
                <Loader />
              ) : (
                <button
                  onClick={() => {
                    $(".checking").css("display", "block");
                  }}
                  type="submit"
                >
                  Check
                  {loading ? (
                    <Spinner
                      className="checking"
                      animation="border"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  ) : null}
                </button>
              )}
              <div className="message text-success">{message}</div>
            </form>
          </div>

          {stockNumber > 0 ? (
            <button onClick={handleCart} className="btn btn--primary">
              Add to cart
            </button>
          ) : (
            <button disabled href="#" className="btn btn--primary">
              Add to cart
            </button>
          )}

          <div style={{ color: "red", fontSize: "1.2rem" }}>
            {stockNumber <= 5
              ? `Only ${stockNumber} left in stock, Order Now !!!`
              : null}
          </div>

          <div style={{ fontSize: "2rem", fontWeight: "800" }} className="or">
            OR
          </div>
          {Serviceable && deliveryCharge ? (
            <button
              onClick={handleBuyNow}
              href="#"
              className="btn btn--primary"
            >
              Buy Now
            </button>
          ) : (
            <button
              disabled
              onClick={() => {
                window.alert("Enter pincode First");
              }}
              href="#"
              className="btn btn--primary"
            >
              Buy Now
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isServiceable: state.pincode.Serviceable,
  Loading: state.pincode.loading,
  pincodeData: state.pincode,
  order: state.order,
});

export default connect(mapStateToProps, {
  checkPincode,
  addProductToCart,
  createOrder,
})(ProductDescription);
