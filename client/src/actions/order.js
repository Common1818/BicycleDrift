import {
  CREATE_ORDER,
  DELETE_ORDER,
  DELETE_ORDER_ERROR,
  GET_ALL_ORDERS,
  GET_ALL_USER_ORDERS,
  GET_ALL_ORDERS_ERROR,
} from "./types";
import { setAlert } from "./alert";
import axios from "axios";
const userId = localStorage.getItem("userId");
export const createOrder = (data) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    dispatch(
      setAlert("You need to be logged in to complete an Order", "danger")
    );
  }
  //   console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ ...data, user: userId });

  try {
    const res = await axios.post(`/api/order/create/${userId}`, body, config);
    const messagesArray = res.data.messages;

    // orderAdded added message alert
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );

    dispatch({
      type: CREATE_ORDER,
      payload: res.data.order,
    });

    // reset redirect boolean so that cart can be visited again
    setTimeout(() => {
      dispatch({
        type: "RESET_CART_REDIRECT",
      });
    }, 2000);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const fetchOrder = (orderId) => async (dispatch) => {
  dispatch({
    type: "SET_ORDER_LOADER",
  });
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.get(`/api/order/${orderId}/${userId}`);
    // orderAdded added message alert

    dispatch(setAlert("Order fetched successfully", "danger"));
    if (res.data.billingDetails) {
      dispatch({
        type: "BILLING_DETAILS_UPDATED",
      });
    }

    dispatch({
      type: CREATE_ORDER,
      payload: res.data,
    });
  } catch (err) {
    //    dispatch({
    //      payload: { errMessage: "Error getting all brands" },
    //      type: ADD_BRAND_FAIL,
    //    });
  }
};

export const fetchAdminOrder = (orderId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.get(`/api/adminorder/${userId}/${orderId}`);
    dispatch({
      type: "GET_ADMIN_ORDER",
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: GET_ALL_ORDERS_ERROR,
    });
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({
    type: "SET_ORDER_LOADER",
  });
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.delete(`/api/order/${orderId}/${userId}`);
    const messagesArray = res.data.messages;
    // orderAdded added message alert
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: DELETE_ORDER,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: DELETE_ORDER_ERROR,
    });
  }
};

export const updateAddress = (orderId, data) => async (dispatch) => {
  dispatch({
    type: "SET_ORDER_LOADER",
  });
  const userId = localStorage.getItem("userId");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ pincode: data.pincode });
    const res = await axios.post(`/api/pincode/check`, body, config);
    const { Serviceable } = res.data;
    if (!Serviceable) {
      dispatch(setAlert("Sorry this pincode is not serviceable", "danger"));
      dispatch({
        type: "BILLING_DETAILS_ERROR",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(data);

        const res = await axios.put(
          `/api/order/${orderId}/${userId}`,
          body,
          config
        );
        const messagesArray = res.data.messages;
        messagesArray.forEach((message) =>
          dispatch(setAlert(message.msg, "danger"))
        );
        dispatch({
          type: "BILLING_DETAILS_UPDATED",
        });
      } catch (err) {
        dispatch({
          type: "BILLING_DETAILS_ERROR",
        });

        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/allorders/${localStorage.getItem("userId")}`
    );
    const messagesArray = res.data.messages;
    // Added successssfully wala message
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: GET_ALL_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: GET_ALL_ORDERS_ERROR,
    });
  }
};

export const getUserOrders = () => async (dispatch) => {
  dispatch({
    type: "SET_ORDER_LOADER",
  });
  try {
    const res = await axios.get(
      `/api/orders/${localStorage.getItem("userId")}`
    );
    const messagesArray = res.data.messages;
    // Added successssfully wala message
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: GET_ALL_USER_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: GET_ALL_ORDERS_ERROR,
    });
  }
};
