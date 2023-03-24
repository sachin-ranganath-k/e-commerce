import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../redux/userActions/UserActions";
import UserNavbar from "../UserNavbar/UserNavbar";

const MyOrders = () => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const { myOrders } = useSelector((state) => state.UserReducer);
  let slNo = 1;
  const [ordersPerPage, setOrdersPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const visibleOrders = myOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  console.log("ttt", myOrders)

  useEffect(() => {
    dispatch(fetchOrders(userId));
  }, [dispatch, userId]);

  const totalPage =
    myOrders.message === "No records found" ? 0 : myOrders.length;

  const totalPages = Math.ceil(myOrders.length / ordersPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  return (
    <div>
      <UserNavbar />
      <div className="container">
        {myOrders.message === "No records found" ? (
          <h2>No orders yet</h2>
        ) : (
          <div>
            <br />
            <h2>My Orders</h2>
            <br />
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product Name</th>
                  <th>Ordered On</th>
                  <th>Delivered On</th>
                </tr>
              </thead>
              <tbody>
                {visibleOrders.map((item, index) => {
                  //  let orderStatus = item.status === "0" ? "Yet to deliver" : "01-01-2023";
                  return (
                    <tr key={index}>
                      <td>
                        <Link
                          to={`/orderInvoice/${item?.invoice_number}`}
                          style={{ textDecoration: "none" }}
                        >
                          {item?.invoice_number}
                        </Link>
                      </td>
                      <td>
                        {item?.product_name} {item?.brand_name}
                      </td>
                      <td> {item?.order_date}</td>
                      <td>{item?.delivered_on}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br />
            <div>
              <h5
                style={{
                  float: "right",

                  //  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {pages.map((page) => (
                  <span
                    style={{ border: "1px solid black", padding: "10px" }}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >{`${page}`}</span>
                ))}
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
