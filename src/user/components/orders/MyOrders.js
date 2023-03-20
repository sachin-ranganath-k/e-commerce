import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../redux/userActions/UserActions";
import UserNavbar from "../UserNavbar/UserNavbar";

const MyOrders = () => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const { myOrders } = useSelector((state) => state.UserReducer);
  let slNo = 1;

  useEffect(() => {
    dispatch(fetchOrders(userId));
  }, [dispatch, userId]);

  // const totalPage =
  //   myOrders.message === "No records found" ? 0 : myOrders.length;

  // const totalPages = Math.ceil(myOrders.length/);

  return (
    <div>
      <UserNavbar />
      <div className="container">
  {myOrders.message === "No records found" ? (
    <h2>No orders yet</h2>
  ) : (
    <div>
      <h2>My Orders</h2>
      <br />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Ordered On</th>
            <th>Delivered On</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((item, index) => {
            let orderStatus = item.status === "0" ? "Yet to deliver" : "01-01-2023";
            return (
              <tr key={index}>
                <td>{index + 1}</td>
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
                <td> {item?.date}</td>
                <td>{orderStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )}
</div>

    </div>
  );
};

export default MyOrders;
