import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { fetchItemsFromCartOfPerson } from "../../redux/userActions/UserActions";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const { cartItemsofPerson } = useSelector((state) => state.UserReducer.cart);

  useEffect(() => {
    dispatch(fetchItemsFromCartOfPerson());
  }, [cartItemsofPerson]);

  const noOfItems = cartItemsofPerson.length === 0 ? 0 : cartItemsofPerson.length;

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to="/dashboard">
          Dashboard
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
              to="/yetToDevelop"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Orders
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/yetToDevelop"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Profile
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cart<ShoppingCartIcon />
               <sup>{noOfItems}</sup>
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
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/adminLogout" className="dropdown-item">
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
