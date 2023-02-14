import axios from "axios";
import * as actions from "./UserActions";

jest.mock("axios");

describe("User Actions", () => {
  it("fetchAllProducts dispatches FETCH_PRODUCTS_LOADING", () => {
    const dispatch = jest.fn();
    actions.fetchAllProducts()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "FETCH_PRODUCTS_LOADING",
    });
  });

  it("fetchAllProducts dispatches FETCH_PRODUCTS", async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, name: "Product 1" }] });
    const dispatch = jest.fn();
    await actions.fetchAllProducts()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "FETCH_PRODUCTS",
      payload: [{ id: 1, name: "Product 1" }],
    });
  });

  it("add_ToCart dispatches ADD_TO_CART_STATUS", async () => {
    axios.post.mockResolvedValue({});
    const dispatch = jest.fn();
    await actions.add_ToCart({ productId: 1, quantity: 2 })(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "ADD_TO_CART_STATUS",
      payload: true,
    });
  });
});
