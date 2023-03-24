import React from "react";
import { Modal, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateAsDelivered } from "../../../admin/redux/AdminActions/AdminActions";

const OrderDetailsModal = ({ order, open, onClose }) => {
  const dispatch = useDispatch();

  const handleOrderDeliver = (orderId) => {
    dispatch(updateAsDelivered(orderId))
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div
          style={{
            padding: 20,
            backgroundColor: "#fff",
            margin: "10% 20%",
            borderRadius: "2%",
          }}
        >
          <h2>Review Order</h2>
          <br />
          <p>
            <strong>Order ID: </strong> {order?.invoice_number}
          </p>
          <p>
            <strong>Product Name: </strong> {order?.product_name}
          </p>
          <p>
            <strong>Ordered By: </strong> {order?.user_name}
          </p>
          <p>
            <strong>Address: </strong>
            {`${order?.shop_address}, ${order?.city}, ${order.pincode}`}
          </p>
          <p>
            <strong>Mobile: </strong> {order?.contact_num}
          </p>
          <p>
            <strong>Status: </strong>
            {order?.status === "0" ? "Delivery Pending" : "Order Delivered"}
          </p>
          <p>
            <strong>Delivered On: </strong> {order?.delivered_on}
          </p>
          <Button
            variant="contained"
            onClick={() => handleOrderDeliver(order?.invoice_number)}
          >
            Deliver Now
          </Button>
          &nbsp;&nbsp;
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default OrderDetailsModal;
