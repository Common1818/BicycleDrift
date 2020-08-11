import {
  CREATE_ORDER,
  DELETE_ORDER,
  DELETE_ORDER_ERROR,
} from "../actions/types";

const initialState = { order: {} };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: payload,
        loading: false,
        redirect: true,
      };
    case "RESET_CART_REDIRECT":
      return {
        ...state,
        //  order: payload,
        //  loading: false,
        redirect: null,
      };

    case DELETE_ORDER:
      return { ...state };

    case DELETE_ORDER_ERROR:
      return { ...state };
    default:
      return state;
  }
}
