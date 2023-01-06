import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to="/dashboard">
          Dashboard
        </Link>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
          style={{ color: "white" }}
        >
          <div>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "white" }}
            >
              Orders
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/brands" style={{ textDecoration: "none", color: "white" }}>
              Add Brand
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/addCategory"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Category
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://abhibulbule.000webhostapp.com/Product_latest/admin/product/product.php" style={{ textDecoration: "none", color: "white" }}>
              Add Product
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Update Details
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
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
