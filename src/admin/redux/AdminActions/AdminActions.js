import axios from "axios";
import { FETCH_ADMIN_API, SHOW_CATEGORY_API } from "../../AdminEndPoints/AdminEndPoints";
import { ADMIN_LOGIN_FAILURE, FETCH_ADMIN, SHOW_CATEGORIES } from "./AdminActionConstants";

export const fetchAdmins = () => {
    return async function (dispatch) {
      await axios
        .get(`${FETCH_ADMIN_API}`)
        .then((res) => {
          dispatch({ type: FETCH_ADMIN, payload:res.data });
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
          dispatch({ type: SHOW_CATEGORIES, payload:res.data });
        })
        .catch((err) => {
           dispatch({ type: ADMIN_LOGIN_FAILURE, payload: "Failed" });
        });
    };
  };