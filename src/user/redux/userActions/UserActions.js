import axios from "axios";
import {
  ADD_TO_CART_API,
  DELETE_ITEM_FROM_CART_API,
  FETCH_ITEMS_FROM_CART_OF_PERSON_API,
  FETCH_PRODUCTS_API,
} from "../../../admin/AdminEndPoints/AdminEndPoints";
import {
  ADD_TO_CART_LOADING,
  ADD_TO_CART_STATUS,
  DELETE_ITEM_FROM_CART,
  FETCH_CART_ITEMS_OF_PERSON,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
} from "./UserActionConstants";

export const fetchAllProducts = () => {
  return function (dispatch) {
    dispatch({
      type: FETCH_PRODUCTS_LOADING,
    });
    axios
      .get(`${FETCH_PRODUCTS_API}`)
      .then((res) => {
        dispatch({ type: FETCH_PRODUCTS, payload: res.data });
      })
      .catch((err) => {
       // console.log("Error");
      });
  };
};

export const add_ToCart = (payload) => {
  return function (dispatch) {
    dispatch({ type: ADD_TO_CART_LOADING });
    axios
      .post(`${ADD_TO_CART_API}`, payload)
      .then((res) => {
        const result = JSON.parse(res.config.data);
        if (result.product_id) {
          dispatch({ type: ADD_TO_CART_STATUS, payload: result });
        }
      })
      .catch((err) => {
        // dispatch({ type: ADD_TO_CART_STATUS, payload: [] });
      });
  };
};

export const fetchItemsFromCartOfPerson = () => {
  return function (dispatch) {
    // dispatch({ type: ADD_TO_CART_LOADING });
    axios
      .get(`${FETCH_ITEMS_FROM_CART_OF_PERSON_API}`)
      .then((res) => {
        const result = res.data.filter((item) => item.product_id);
        if (result.length) {
          dispatch({ type: FETCH_CART_ITEMS_OF_PERSON, payload: res.data });
        }
      })
      .catch((err) => {
      //  console.log("Error");
      });
  };
};

export const deleteItemFromCart = (itemId) => {
  return function (dispatch) {
    // dispatch({ type: ADD_TO_CART_LOADING });
    axios
      .get(`${DELETE_ITEM_FROM_CART_API}?cart_id=${itemId}`)
      .then((res) => {
        // console.log(res);
        dispatch({ type: DELETE_ITEM_FROM_CART, payload: itemId });
      })
      .catch((err) => {
       // console.log("Error");
      });
  };
};
