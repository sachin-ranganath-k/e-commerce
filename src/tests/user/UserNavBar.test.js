import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import { fetchItemsFromCartOfPerson } from "../../redux/userActions/UserActions";

describe("UserNavbar", () => {
  let cartItems, dispatchMock;

  beforeEach(() => {
    cartItems = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];

    dispatchMock = jest.fn();

    jest.mock("react-redux", () => ({
      useDispatch: () => dispatchMock,
      useSelector: () => ({ cartItemsofPerson: cartItems }),
    }));

    jest.mock("../../redux/userActions/UserActions", () => ({
      fetchItemsFromCartOfPerson: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the navbar", () => {
    render(
      <Provider store={{}}>
        <Router>
          <UserNavbar />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Orders")).toBeInTheDocument();
    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should call fetchItemsFromCartOfPerson on mount", () => {
    render(
      <Provider store={{}}>
        <Router>
          <UserNavbar />
        </Router>
      </Provider>
    );
    expect(fetchItemsFromCartOfPerson).toHaveBeenCalledTimes(1);
  });

  it("should display the correct number of items in the cart", () => {
    render(
      <Provider store={{}}>
        <Router>
          <UserNavbar />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Cart 2")).toBeInTheDocument();
  });
});
