import {
  ADD_TO_CART_LOADING,
  ADD_TO_CART_STATUS,
  FETCH_CART_ITEMS_OF_PERSON,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
} from "../userActions/UserActionConstants";

const initialState = {
  productsList: [],
  cart: {
    cartItemsofPerson: [],
    addToCartStatus: false,
    isLoading: false,
    isAddToCartLoading: false,
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
        cart: {
          ...state.cart,
          isLoading: false,
        },
        productsList: action.payload,
      };
    case ADD_TO_CART_STATUS:
      return {
        ...state,
        cart: {
          ...state.cart,
          isAddToCartLoading: false,
          addToCartStatus: true,
        },
      };

    case ADD_TO_CART_LOADING:
      return {
        ...state,
        cart: {
          ...state.cart,
          isAddToCartLoading: true,
          addToCartStatus: false,
        },
      };

    case FETCH_CART_ITEMS_OF_PERSON:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItemsofPerson: action.payload,
        },
      };

    default:
      return state;
  }
};

export default UserReducer;
