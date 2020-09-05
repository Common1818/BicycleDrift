import {
  CHECK_PINCODE,
  FETCH_PINCODES,
  FETCH_PINCODES_FAIL,
} from "../actions/types";

const initialState = { pincodes: [], pincode: {}, loading: false };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_PINCODE_LOADER":
      return {
        ...state,
        loading: true,
      };
    case CHECK_PINCODE:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case "RESET_LOADER":
      return {
        ...state,
        loading: null,
      };
    case FETCH_PINCODES:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case FETCH_PINCODES_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
