import axios from "axios";
import { FETCH_ADMIN_API } from "../../AdminEndPoints/AdminEndPoints";
import { ADMIN_LOGIN_FAILURE, FETCH_ADMIN } from "./AdminActionConstants";

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