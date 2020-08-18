import React, { useState, useEffect } from "react";
import "./css/cart.css";
import $ from "jquery";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuantityButton from "./QuantityButton";
import { createOrder } from "../../actions/order";

const Cart = ({ createOrder, order }) => {
  const [CartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  useEffect(() => {
    console.log("cart product cahnges");
  }, [CartProducts]);
  var CartQuantity = 0;
  var CartTotalValue = 0;
  CartProducts &&
    CartProducts.map((prod) => {
      const { quantity } = prod;
      const { price } = prod;
      CartQuantity += parseInt(quantity);
      CartTotalValue += price * quantity;
    });
  console.log(CartTotalValue, CartQuantity);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  // order related stuff

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
          <div className="col-sm-8 cart-items-container">
            <div>
              <h3>MyCart ({CartQuantity})</h3>
              <span>
                <img src="https://www.svgrepo.com/show/47839/maps.svg" alt="" />
                Deliver To
                <input type="text" name="" id="" />
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
                      <h3> {formatter.format(product.price)}</h3>
                    </div>
                    <div className="cart-options">
                      <button
                        onClick={(e) => {
                          console.log(product);
                          console.log(CartProducts);
                          const newArr = CartProducts.filter((prod) => {
                            return prod._id != product._id;
                          });
                          setCartProducts(newArr);
                          localStorage.setItem("cart", JSON.stringify(newArr));
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
          </div>
          <div className="col-sm-4">
            <div className="cart-total">
              <div className="top">
                <h5 className="text-success">
                  * Part of your order qualifies for FREE Delivery. Select this
                  option at checkout.
                </h5>
              </div>
              <div className="bottom">
                <h3>Subtotal : items</h3>
                <h3> {formatter.format(CartTotalValue)}</h3>
                <button onClick={handleOrder}>Proceed To Buy</button>
              </div>
            </div>
            <div className="brand-img-cart">
              <img src="" alt="" />
            </div>
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
});

export default connect(mapStateToProps, { createOrder })(Cart);
