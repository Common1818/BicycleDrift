import React, { useState, useEffect } from "react";
import Logo from "./Logo.PNG";
import "./css/cart.css";
import $ from "jquery";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuantityButton from "./QuantityButton";
import { createOrder } from "../../actions/order";
import { updateCartItem } from "../../actions/cart";
import { checkPincode } from "../../actions/pincode";
import CartFAQ from "./CartFAQ";

const Cart = ({
  createOrder,
  order,
  updateCartItem,
  checkPincode,
  deliveryCharge,
  Serviceable,
}) => {
  const [CartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  console.log(Serviceable);
  const [pincode, setPincode] = useState();

  useEffect(() => {
    if (pincode && pincode.length == 6) {
      $("img.pincode-cart-check").addClass("visible");
      checkPincode({ pincode });
      $("input.pincode-cart").blur();
      // input.blur();
      setTimeout(() => {
        $("img.pincode-cart-check").removeClass("visible");
      }, 2000);

      $("html, body").animate({ scrollTop: 500 }, 500);

      console.log(pincode);
    }
    if (pincode && pincode.length > 6) {
      window.alert("enter a valid pincode");
    } else {
      $("img.pincode-cart-check").removeClass("visible");
    }
  }, [pincode]);

  useEffect(() => {
    console.log("cart product changes");
  }, [CartProducts]);
  var CartQuantity = 0;
  var CartTotalValue = 0;
  var CartActualValue = 0;
  var CartSavings = 0;
  if (deliveryCharge) {
    CartTotalValue += parseInt(deliveryCharge);
  }
  CartProducts &&
    CartProducts.map((prod) => {
      const { quantity } = prod;
      const { price } = prod;
      const { actualPrice } = prod;
      CartQuantity += parseInt(quantity);
      CartTotalValue += price * quantity;
      CartActualValue += parseInt(actualPrice) * quantity;
      CartSavings += actualPrice * quantity - price * quantity;
    });
  console.log(CartTotalValue, CartQuantity);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  // order related stuff // // \\/\/\/\\//\/\/\/\/\/\/\/\/\/\/\/\/\\/

  const handleOrder = (e) => {
    console.log({
      products: CartProducts,
      total: CartTotalValue,
      totalQuantity: CartQuantity,
    });
    createOrder({
      products: CartProducts,
      total: CartTotalValue,
      totalQuantity: CartQuantity,
    });
  };

  //
  const { loading, redirect } = order;
  const orderId = order.order._id;
  if (redirect == true) {
    localStorage.setItem("cart", JSON.stringify([]));
    return <Redirect to={"/order/" + orderId} />;
  }

  // console.log(newOrder);

  var index = 0;

  return (
    <div className="cart-container ">
      {CartProducts && CartProducts.length > 0 ? (
        <div className="row">
          <div className="col-xl-8 cart-items-container">
            <div>
              <h3>MyCart ({CartQuantity})</h3>
              <span>
                <img src="https://www.svgrepo.com/show/47839/maps.svg" alt="" />
                Deliver To
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
                <img
                  className="pincode-cart-check"
                  src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif"
                  alt=""
                />
              </span>
            </div>

            <hr />
            {CartProducts &&
              CartProducts.map((product) => {
                index++;
                return (
                  <div className="prod row">
                    <div className="col-sm-3">
                      <div>
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                    <div className="col-sm-5"></div>
                    <div className="col-sm-4">
                      <h3> {product.name} </h3>
                      <h6>Color: {product.color} </h6>
                      <h6>By {product.brand}</h6>
                      <h6>Quantity:{product.quantity}</h6>
                      <h3>
                        {" "}
                        {formatter.format(product.price)}{" "}
                        <s>{product.actualPrice}</s>{" "}
                      </h3>
                    </div>
                    <div className="cart-options">
                      <button
                        onClick={(e) => {
                          console.log(product);
                          console.log(CartProducts);
                          const newArr = CartProducts.filter((prod) => {
                            return prod._id != product._id;
                          });
                          updateCartItem(newArr);
                          setCartProducts(newArr);

                          console.log(newArr);
                        }}
                        className="remove"
                      >
                        Remove
                      </button>
                      <QuantityButton
                        CartProducts={CartProducts}
                        setCartProducts={setCartProducts}
                        product={product}
                      />
                    </div>
                    <hr />
                  </div>
                );
              })}

            <hr />
            <div className="cart-total">
              <div className="top">
                <div className="cart-promise" style={{ textAlign: "center" }}>
                  <img
                    style={{ width: "100px" }}
                    src="https://www.finepoint.com.au/skin/frontend/default/ma_sahara_fashion34/images/Delivery_Promise.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="bottom">
                <div className="flex">
                  {" "}
                  <h3>Subtotal : {CartQuantity} Items</h3>
                  <h3 className="text-danger">
                    {" "}
                    {formatter.format(CartActualValue)}
                  </h3>
                </div>
                <div className="flex">
                  {" "}
                  <h3>Delivery Charges :</h3>
                  <h3
                    onClick={() => {
                      $("html, body").animate({ scrollTop: 10 }, 500);
                    }}
                    className="text-danger"
                  >
                    {" "}
                    {deliveryCharge
                      ? formatter.format(deliveryCharge)
                      : Serviceable == null
                      ? "Enter pincode to check delivery Charges"
                      : Serviceable == false
                      ? "Sorry We don't service your area"
                      : null}
                  </h3>
                </div>

                <br />
                <div className="flex">
                  {" "}
                  <h3>Total Savings </h3>
                  <h3 className="text-dark">
                    {" "}
                    {formatter.format(CartSavings)}
                  </h3>
                </div>
                <hr />
                <div className="flex">
                  {" "}
                  <h3>Discounted Price :</h3>
                  <h3 className="text-dark">
                    {formatter.format(CartTotalValue)}
                  </h3>
                </div>

                {Serviceable && deliveryCharge ? (
                  <button onClick={handleOrder}>Proceed To Buy ✅</button>
                ) : (
                  <button
                    style={{ background: "#f1f1f1", color: "grey" }}
                    disabled
                  >
                    {" "}
                    Buy
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <CartFAQ />
          </div>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  deliveryCharge: state.pincode.deliveryCharge,
  Serviceable: state.pincode.Serviceable,
});

export default connect(mapStateToProps, {
  createOrder,
  updateCartItem,
  checkPincode,
})(Cart);
