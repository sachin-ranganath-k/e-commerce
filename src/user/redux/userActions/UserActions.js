import axios from "axios";
import {
  ADD_TO_CART_API,
  FETCH_PRODUCTS_API,
} from "../../../admin/AdminEndPoints/AdminEndPoints";
import {
  ADD_TO_CART_STATUS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
} from "./UserActionConstants";

export const fetchAllProducts = () => {
  return async function (dispatch) {
    dispatch({
      type: FETCH_PRODUCTS_LOADING,
    });
    await axios
      .get(`${FETCH_PRODUCTS_API}`)
      .then((res) => {
        dispatch({ type: FETCH_PRODUCTS, payload: res.data });
      })
      .catch((err) => {
        console.log("Error");
      });
  };
};

export const add_ToCart = (payload) => {
  return async function (dispatch) {
    await axios
      .post(`${ADD_TO_CART_API}`, payload)
      .then((res) => {
        console.log(res);
        dispatch({ type: ADD_TO_CART_STATUS, payload: true });
      })
      .catch((err) => {
        console.log("Error");
      });
  };
};
