import {
  ADD_TO_CART_STATUS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
} from "../userActions/UserActionConstants";

const initialState = {
  productsList: [],
  cart: {
    addToCartStatus: false,
    isLoading: false,
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        cart: {
          ...state.cart,
          isLoading: true,
        },
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
        cart: {
          ...state.cart,
          isLoading: false,
        },
      };
    case ADD_TO_CART_STATUS:
      return {
        ...state,
        cart: {
          ...state.cart,
          addToCartStatus: action.payload,
        },
      };

    default:
      return state;
  }
};

export default UserReducer;
