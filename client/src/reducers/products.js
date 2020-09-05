import {
  GET_ALL_BIKES,
  GET_ALL_BIKES_ERROR,
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_ERROR,
} from "../actions/types";

const initialState = {
  AllProducts: [],
  Bikes: [],
  Spares: [],
  Accessories: [],
  SearchResults: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BIKES:
      return {
        ...state,
        AllProducts: payload,
        Spares: payload.filter((item) => item.productType === "Spare"),
        Bikes: payload.filter((item) => item.productType === "Bike"),
        Accessories: payload.filter((item) => item.productType === "Accessory"),
        loading: false,
      };
    case GET_ALL_BIKES_ERROR:
      return {
        ...state,
        Bikes: [],
        loading: false,
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        SearchResults: payload,
        loading: false,
      };
    case GET_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        SearchResults: [],
        loading: false,
      };
    default:
      return state;
  }
}
