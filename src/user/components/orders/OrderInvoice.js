import React, { useEffect } from "react";
import UserNavbar from "../UserNavbar/UserNavbar";
import "../../../styles/panel.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/userActions/UserActions";
import "../../../styles/noPrint.css";
import { initializeLogin, isAuthenticUser } from "../../authentication/Session";

const OrderInvoice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const { orderId } = useParams();
  const { myOrders } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(fetchOrders(userId));
    initializeLogin();
  }, [dispatch, userId]);

  if (!isAuthenticUser()) {
    navigate("/user-login");
  }

  let item = myOrders.find((order) => order.invoice_number === orderId);

  let deliveryStatus = item?.status === "0" ? "Pending" : "Order Delivered";

  const printInvoice = () => {
    window.print();
  };

  return (
    <>
      <div className="noPrint">
        <UserNavbar />
      </div>
      <br />
      <div className="container">
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Order ID : {item?.invoice_number}{" "}
              </h3>
            </div>
            <div className="panel-body" style={{ fontWeight: "bold" }}>
              <div className="container">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Item : {item?.product_name} {item?.brand_name}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>Address : </p>
                      <p>
                        {item?.shop_address} {item?.city} {item?.pincode}
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <p>Ordered On : {item?.date}</p>
                    </div>
                    <div className="col-md-6">
                      <p>Delivery Status : {deliveryStatus}</p>
                      <p>Delivered On : {item?.delivered_on} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <button className="noPrint" onClick={printInvoice}>
            Print
          </button>
        </center>
      </div>
    </>
  );
};

export default OrderInvoice;
