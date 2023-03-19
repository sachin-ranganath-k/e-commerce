import React from "react";
import { Link } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";

const OrderPlaced = () => {
  return (
    <div>
      <UserNavbar />

      <h2>
        Order Placed. Goto
        <Link to="/myOrders" style={{textDecoration:"none", align:"center"}}> My Orders </Link>
        to check your orders.
      </h2>
    </div>
  );
};

export default OrderPlaced;
