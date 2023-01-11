import axios from "axios";
import { FETCH_PRODUCTS_API } from "../../../admin/AdminEndPoints/AdminEndPoints";
import { FETCH_PRODUCTS } from "./UserActionConstants";

export const fetchAllProducts = () => {
    return async function (dispatch) {
      await axios
        .get(`${FETCH_PRODUCTS_API}`)
        .then((res) => {
          dispatch({ type: FETCH_PRODUCTS, payload: res.data });
        })
        .catch((err) => {
         console.log("Error")
        });
    };
  };