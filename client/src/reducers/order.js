import {
  CREATE_ORDER,
  DELETE_ORDER,
  DELETE_ORDER_ERROR,
  GET_ALL_ORDERS,
  GET_ALL_USER_ORDERS,
  GET_ALL_ORDERS_ERROR,
} from "../actions/types";

const initialState = { order: {}, loading: false };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ORDER_LOADER":
      return {
        ...state,
        loading: true,
      };
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
    case "BILLING_DETAILS_UPDATED":
      return {
        ...state,
        billingDetailsUpdated: true,
        loading: false,
      };
    case "BILLING_DETAILS_ERROR":
      return {
        ...state,
        loading: false,
        billingDetailsUpdated: false,
      };
    case "GET_ADMIN_ORDER":
      return {
        ...state,
        loading: false,
        AdminOrder: payload.order,
        loadingComplete: true,
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        loading: false,
        orders: payload.orders,
        loadingComplete: true,
      };
    case GET_ALL_ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        loadingComplete: true,
      };
    case GET_ALL_USER_ORDERS:
      return {
        ...state,
        loading: false,
        orders: payload.orders,
        loadingComplete: true,
      };

    case DELETE_ORDER:
      return { ...state, loading: true };

    case DELETE_ORDER_ERROR:
      return { ...state, loading: true };
    default:
      return state;
  }
}
