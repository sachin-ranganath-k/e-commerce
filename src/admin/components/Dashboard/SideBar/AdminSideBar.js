import React from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../../../constants/constants";
import CardsParent from "../Cards/CardsParent";
import AdminFooter from "../Footer/Footer";
import TodayOrdersTable from "../Tables/TodayOrders";



const AdminSideBar = () => {
  return (
    <div className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          Dashboard
        </a>

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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Orders
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Add Brand
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Add Category
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Add Product
            </Link>
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
      <div id="layoutSidenavv">
        {/* <div id="layoutSidenav_nav"> */}
        {/* <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="index.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="401.html">401 Page</a>
                                            <a className="nav-link" href="404.html">404 Page</a>
                                            <a className="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav> */}
        {/* </div> */}
        <br />
        <br />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              {/* <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol> */}

              {/* Cards */}

              <CardsParent />

              {/* End of Cards */}

              {/* <div className="row">
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-area me-1"></i>
                      Area Chart Example
                    </div>
                    <div className="card-body">
                      <canvas
                        id="myAreaChart"
                        width="100%"
                        height="40"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <canvas id="myBarChart" width="100%" height="40"></canvas>
                    </div>
                  </div>
                </div>
              </div> */}

            {/* Today orders table */}
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                 {Dashboard.TODAY_ORDERS}
                </div>
                <div className="card-body">
                  <TodayOrdersTable />
                </div>
              </div>
            {/* End of Today orders table */}
          
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
