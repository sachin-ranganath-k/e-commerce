import { ADD_TO_CART_STATUS, FETCH_PRODUCTS, FETCH_PRODUCTS_LOADING } from "../../user/redux/userActions/UserActionConstants";
import UserReducer from "../../user/redux/userReducer/userReducer";


describe("UserReducer", () => {
  it("should return the initial state", () => {
    expect(UserReducer(undefined, {})).toEqual({
      productsList: [],
      cart: {
        addToCartStatus: false,
        isLoading: false,
      },
    });
  });

  it("should handle FETCH_PRODUCTS_LOADING", () => {
    expect(
      UserReducer(undefined, {
        type: FETCH_PRODUCTS_LOADING,
      })
    ).toEqual({
      productsList: [],
      cart: {
        addToCartStatus: false,
        isLoading: true,
      },
    });
  });

  it("should handle FETCH_PRODUCTS", () => {
    expect(
      UserReducer(undefined, {
        type: FETCH_PRODUCTS,
        payload: [
          { id: 1, name: "Product 1", price: 100 },
          { id: 2, name: "Product 2", price: 200 },
        ],
      })
    ).toEqual({
      productsList: [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
      ],
      cart: {
        addToCartStatus: false,
        isLoading: false,
      },
    });
  });

  it("should handle ADD_TO_CART_STATUS", () => {
    expect(
      UserReducer(undefined, {
        type: ADD_TO_CART_STATUS,
        payload: true,
      })
    ).toEqual({
      productsList: [],
      cart: {
        addToCartStatus: true,
        isLoading: false,
      },
    });
  });
});
