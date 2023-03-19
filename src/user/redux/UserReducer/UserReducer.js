import {
  ADD_TO_CART_LOADING,
  ADD_TO_CART_STATUS,
  DELETE_ITEM_FROM_CART,
  FETCH_CART_ITEMS_OF_PERSON,
  FETCH_MY_ORDERS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_USERS_SUCCESS,
  LOAD_REGISTER_LOGIN,
  REGISTER_USER_SUCCESS,
} from "../userActions/UserActionConstants";

const initialState = {
  userRegister: {
    registeredUsers: [],
    allUsers: [],
    singleUser: {},
    isRegisterLoginLoading: false,
    isUserRegisterSuccess: false,
  },
  productsList: [],
  myOrders: [],
  cart: {
    cartItemsofPerson: [],
    addToCartStatus: false,
    isLoading: false,
    isAddToCartLoading: false,
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          isUserRegisterSuccess: true,
          isRegisterLoginLoading: false,
          registeredUsers: [
            ...state.userRegister.registeredUsers,
            action.payload,
          ],
        },
      };

    case LOAD_REGISTER_LOGIN:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          isUserRegisterSuccess: false,
          isRegisterLoginLoading: true,
        },
      };

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          allUsers: action.payload,
        },
      };
    }

    case FETCH_SINGLE_USER_SUCCESS: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          singleUser: action.payload,
        },
      };
    }

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

    case FETCH_MY_ORDERS:
      return {
        ...state,
        myOrders: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
