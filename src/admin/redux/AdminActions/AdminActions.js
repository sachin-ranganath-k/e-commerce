import axios from "axios";
import {
  ADD_BRAND_API,
  ADD_CATEGORY_API,
  FETCH_ADMIN_API,
  SHOW_BRAND_API,
  SHOW_CATEGORY_API,
  TODAY_ORDERS_API,
  TOTAL_ORDERS_API,
  UPDATE_ORDER_DELIVERED_API,
} from "../../AdminEndPoints/AdminEndPoints";
import {
  ADD_BRANDS,
  ADD_CATEGORY,
  ADMIN_LOGIN_FAILURE,
  BRAND_ADDED_SUCCESS_STATUS,
  CATEGORY_ADDED_SUCCESS_STATUS,
  CLEAN_UP_DATA,
  FETCH_ADMIN,
  SHOW_BRANDS,
  SHOW_CATEGORIES,
  TODAY_ORDERS_LIST,
  TOTAL_ORDERS_LIST,
  UPDATE_AS_DELIVERED_SUCCESS,
} from "./AdminActionConstants";

export const fetchAdmins = () => {
  return async function (dispatch) {
    await axios
      .get(`${FETCH_ADMIN_API}`)
      .then((res) => {
        dispatch({ type: FETCH_ADMIN, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ADMIN_LOGIN_FAILURE, payload: "Failed" });
      });
  };
};

export const fetchCategories = () => {
  return async function (dispatch) {
    await axios
      .get(`${SHOW_CATEGORY_API}`)
      .then((res) => {
        dispatch({ type: SHOW_CATEGORIES, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ADMIN_LOGIN_FAILURE, payload: "Failed" });
      });
  };
};

export const fetchBrands = () => {
  return async function (dispatch) {
    await axios
      .get(`${SHOW_BRAND_API}`)
      .then((res) => {
        // console.log(res)
        dispatch({ type: SHOW_BRANDS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: BRAND_ADDED_SUCCESS_STATUS, payload: "Failed" });
      });
  };
};

export const addCategory = (payload) => {
  return async function (dispatch) {
    await axios
      .post(`${ADD_CATEGORY_API}`, payload)
      .then((res) => {
        dispatch({ type: ADD_CATEGORY, payload });
        dispatch({ type: CATEGORY_ADDED_SUCCESS_STATUS, payload: true });
      })
      .catch((err) => {
        //  console.log(err);
      });
  };
};

export const addBrand = (payload) => {
  return async function (dispatch) {
    await axios
      .post(`${ADD_BRAND_API}`, payload)
      .then((res) => {
        dispatch({ type: ADD_BRANDS, payload });
        dispatch({ type: BRAND_ADDED_SUCCESS_STATUS, payload: true });
      })
      .catch((err) => {
        //  console.log(err);
      });
  };
};

export const todayOrders = () => {
  return async function (dispatch) {
    await axios
      .get(`${TODAY_ORDERS_API}`)
      .then((res) => {
        dispatch({ type: TODAY_ORDERS_LIST, payload: res.data });
      })
      .catch((err) => {
        // console.log("Err")
      });
  };
};

export const totalOrders = () => {
  return async function (dispatch) {
    await axios
      .get(`${TOTAL_ORDERS_API}`)
      .then((res) => {
        dispatch({ type: TOTAL_ORDERS_LIST, payload: res.data });
      })
      .catch((err) => {
        //  console.log("Err")
      });
  };
};

export const updateAsDelivered = (orderId) => {
  return async function (dispatch) {
    await axios
      .get(`${UPDATE_ORDER_DELIVERED_API}?invoice_number=${orderId}`)
      .then((res) => {
        dispatch({ type: UPDATE_AS_DELIVERED_SUCCESS, payload: orderId });
      })
      .catch((err) => {
        //  console.log(err);
      });
  };
};

export const cleanUpData = () => {
  return {
    type: CLEAN_UP_DATA,
  };
};
