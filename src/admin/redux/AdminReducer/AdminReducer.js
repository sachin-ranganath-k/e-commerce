import {
  FETCH_ADMIN,
  ADMIN_LOGIN_FAILURE,
  SHOW_CATEGORIES,
  ADD_CATEGORY,
  CATEGORY_ADDED_SUCCESS_STATUS,
  TODAY_ORDERS_LIST,
} from "../AdminActions/AdminActionConstants";

const initialState = {
  adminList: [],
  adminLoginApiStatus: "",
  AllCategoriesList: [],
  newCategoryList: [],
  newCategoryAddedSuccess: false,
  todayOrdersList:[]
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

    case SHOW_CATEGORIES:
      return {
        ...state,
        AllCategoriesList: action.payload,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        newCategoryList: action.payload,
      };

    case CATEGORY_ADDED_SUCCESS_STATUS:
      return {
        ...state,
        newCategoryAddedSuccess: action.payload,
      };

    case TODAY_ORDERS_LIST:
      return{
        ...state,
        todayOrdersList:action.payload
      }

    default:
      return state;
  }
};

export default AdminReducer;
