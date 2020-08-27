import { ADD_TO_CART } from "../actions/types";

const initialState = { cart: [{}], cartItems: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...payload],
      };
    default:
      return state;
  }
}
