/*eslint-disable */
import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToCart } from "../../actions/cart";
import { createOrder } from "../../actions/order";
import { checkPincode } from "../../actions/pincode";
import { Modal, Button } from "react-bootstrap";
import cartGif from "./cartGif.gif";
import $ from "jquery";
import Loader from "../layout/Loader";
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
    stock,
  },
  addProductToCart,
  Serviceable,
  deliveryCharge,
  createOrder,
  order,
  checkPincode,
  Pincode,
}) => {
  const [show, setShow] = useState(false);
  const [pincode, setPincode] = useState();

  useEffect(() => {
    if (pincode && pincode.length === 6) {
      checkPincode({ pincode });
      // $("input.pincode-cart").blur();
      // input.blur();
      // setTimeout(() => {
      //   $("img.pincode-cart-check").removeClass("visible");
      // }, 2000);
    }
    if (pincode && pincode.length > 6) {
      window.alert("enter a valid pincode");
    } else {
      $("img.pincode-cart-check").removeClass("visible");
    }
  }, [pincode]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHover = (id) => {
    $(`.hover${id}`).addClass("animate");
  };
  const handleLeave = (id) => {
    $(`.hover${id}`).removeClass("animate");
  };

  const handleCart = (e) => {
    e.preventDefault();

    if (stock != 0) {
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
    } else {
      window.alert("Sorry this Product is currently out of stock");
    }
  };

  const handleBuyNow = (e) => {
    if (stock != 0) {
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

  const { loading, redirect } = order;
  const orderId = order.order._id;
  if (redirect === true) {
    localStorage.setItem("cart", JSON.stringify([]));
    return <Redirect to={"/order/" + orderId} />;
  }

  return (
    <Fragment>
      {Pincode.loading ? (
        <Loader />
      ) : (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Enter Your Pincode to know Delivery Charges
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              maxLength="6"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              type="number"
              placeholder="Enter Pincode"
              className="pincode-cart animate"
              id=""
            />
          </Modal.Body>
          {!Serviceable ? (
            <div className="text-danger">Sorry we don't service your area</div>
          ) : deliveryCharge ? (
            <div className="text-success">
              Delivery Charge for your pincode is &#8377;{deliveryCharge}
            </div>
          ) : null}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {deliveryCharge ? (
              <Button onClick={handleBuyNow} variant="primary">
                Continue
              </Button>
            ) : (
              <Button disabled onClick={handleBuyNow} variant="primary">
                Continue To Pay
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
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
              src={images && images[0]}
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
            <button
              onClick={() => {
                handleShow();
              }}
              to={"/product/" + _id}
              className="btn btn--primary"
            >
              Buy Now
            </button>
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

const mapStateToProps = (state) => ({
  order: state.order,
  deliveryCharge: state.pincode.deliveryCharge,
  Pincode: state.pincode,
  Serviceable: state.pincode.Serviceable,
});

export default connect(mapStateToProps, {
  addProductToCart,
  checkPincode,
  createOrder,
})(ProductCard);
