import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import UserRegister from "../../user/components/RegisterLoginLogout/UserRegister";
import { Router } from "react-router";
import App from "../../App";

const mockStore = configureMockStore([thunk]);

describe("UserRegister Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      UserReducer: {
        userRegister: {
          isRegisterLoginLoading: false,
          allUsers: [],
        },
      },
    });
  });

  it("renders UserRegister component correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(screen.getByText("User Register")).toBeInTheDocument();
    expect(screen.getByLabelText("User Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Shop Address")).toBeInTheDocument();
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("Pin Code")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });
});
