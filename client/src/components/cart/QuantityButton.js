/*eslint-disable */
import React from "react";

const QuantityButton = ({
  CartProducts,
  setCartProducts,
  product,
  product: { quantity },
}) => {
  return (
    <div
      className="quantity-button-cont"
      style={{
        display: "flex",
        height: "32px",
        width: "98px",
      }}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          if (quantity > 1) {
            var newQuan = quantity - 1;
            CartProducts.map((prod) => {
              if (prod._id === product._id) {
                prod.quantity = newQuan;
              }
            });
            setCartProducts([...CartProducts]);
            localStorage.setItem("cart", JSON.stringify(CartProducts));
            console.log(CartProducts);
            return null;
          } else {
            window.alert("Quantity can not be less than 1");
            return null;
          }
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
        }}
      >
        -
      </button>

      <div style={{ flex: "1" }}>
        <input
          readOnly
          value={quantity}
          type="number"
          style={{
            height: "100%",
            textAlign: "center",
            width: "100%",
          }}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          var newQuan = quantity + 1;
          CartProducts.map((prod) => {
            if (prod._id === product._id) {
              prod.quantity = newQuan;
            }
          });

          setCartProducts([...CartProducts]);
          localStorage.setItem("cart", JSON.stringify(CartProducts));
        }}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
