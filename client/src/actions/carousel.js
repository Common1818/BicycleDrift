import { setAlert } from "./alert";
import axios from "axios";
export const addCarousel = (data) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  // orderAdded added message alert

  try {
    const res = await axios.post(`/api/admindata/add/${userId}`, body, config);

    const messagesArray = res.data.messages;
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const getCarousel = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/getcarousel");

    dispatch({
      type: "GET_CAROUSEL",
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      payload: {},
      type: "GET_CAROUSEL_ERROR",
    });
  }
};
