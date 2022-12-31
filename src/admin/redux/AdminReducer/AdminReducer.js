import {
  FETCH_ADMIN,
  ADMIN_LOGIN_FAILURE,
} from "../AdminActions/AdminActionConstants";

const initialState = {
  adminList: [],
  adminLoginApiStatus: "",
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMIN:
      return {
        ...state,
        adminList: action.payload,
      };

    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        adminLoginApiStatus: action.payload,
      };

    default:
      return state;
  }
};

export default AdminReducer;
