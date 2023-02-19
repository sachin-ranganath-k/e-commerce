import {
  ADD_TO_CART_LOADING,
  ADD_TO_CART_STATUS,
  DELETE_ITEM_FROM_CART,
  FETCH_CART_ITEMS_OF_PERSON,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
  REGISTER_USER,
} from "../userActions/UserActionConstants";

const initialState = {
  userRegister: {
    registeredUsers: [],
    isUserRegisterSuccess: false,
  },
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
    case REGISTER_USER:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          registeredUsers: [...state.userRegister.registeredUsers, action.payload],
          isUserRegisterSuccess:true
        },
      };

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
          cartItemsofPerson: [...state.cart.cartItemsofPerson, action.payload],
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

    case DELETE_ITEM_FROM_CART:
      const filteredItem = state.cart.cartItemsofPerson.filter(
        (item) => item.cart_id !== action.payload
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItemsofPerson: filteredItem,
        },
      };

    default:
      return state;
  }
};

export default UserReducer;
