import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { fetchItemsFromCartOfPerson, fetchUser } from "../../redux/userActions/UserActions";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const { cartItemsofPerson } = useSelector((state) => state.UserReducer.cart);
  const { singleUser } = useSelector((state) => state.UserReducer.userRegister);
  const user_Id = sessionStorage.getItem("userId");

  useEffect(() => {
    dispatch(fetchItemsFromCartOfPerson(user_Id));
    dispatch(fetchUser(user_Id));
  }, [cartItemsofPerson.length, dispatch]);


  const noOfItems = useMemo(() => {
    return cartItemsofPerson.length === 0 ? 0 : cartItemsofPerson.length;
  }, [cartItemsofPerson.length]);

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to="/userDashboard">
          Welcome {singleUser?.user_name}
        </Link>

        <div
          className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
          style={{ color: "white" }}
        >
          <div>
            <Link
              to="/userDashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/myOrders"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Orders
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/myProfile"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Profile
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              Cart
              <ShoppingCartIcon />
              <sup>
                <Badge badgeContent={noOfItems} color="secondary" />
              </sup>
            </Link>
          </div>
        </div>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              {/* <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li> */}
              {/* <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li> */}
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/user-logout" className="dropdown-item">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
