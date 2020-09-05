import { ADD_TO_CART } from "./types";

export const addProductToCart = (cartItem) => (dispatch) => {
  if (localStorage.getItem("cart") == null) {
    const cartProducts = [{ ...cartItem }];
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  } else {
    const tempCart = JSON.parse(localStorage.getItem("cart"));
    const newCart = [...tempCart, { ...cartItem }];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  setTimeout(() => {
    dispatch({
      type: ADD_TO_CART,
      payload: JSON.parse(localStorage.getItem("cart")),
    });
  }, 4000);
};

export const updateCartItem = (cartItem) => (dispatch) => {
  localStorage.setItem("cart", JSON.stringify(cartItem));
  setTimeout(() => {
    dispatch({
      type: ADD_TO_CART,
      payload: JSON.parse(localStorage.getItem("cart")),
    });
  }, 4000);
};
