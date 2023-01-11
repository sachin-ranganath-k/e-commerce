import { FETCH_PRODUCTS } from "../userActions/UserActionConstants";

const initialState = {
  productsList: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer