import {
  FETCH_ADMIN,
  ADMIN_LOGIN_FAILURE,
  SHOW_CATEGORIES,
  ADD_CATEGORY,
} from "../AdminActions/AdminActionConstants";

const initialState = {
  adminList: [],
  adminLoginApiStatus: "",
  AllCategoriesList:[],
  newCategoryList:[]
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


    default:
      return state;
  }
};

export default AdminReducer;
