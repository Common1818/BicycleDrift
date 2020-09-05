const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_CAROUSEL":
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };
    case "GET_CAROUSEL_ERROR":
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };

    default:
      return state;
  }
}
