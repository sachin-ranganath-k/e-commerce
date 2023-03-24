import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "./Panel";
import { totalOrders } from "../../redux/AdminActions/AdminActions";

import AdminNavbar from "../AdminNavbar/AdminNavbar";

const ShowOrders = () => {
  const dispatch = useDispatch();
  const { totalOrdersList } = useSelector((state) => state.AdminReducer);


  useEffect(() => {
    dispatch(totalOrders());
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <br />
        <h3>Orders List</h3>
        <br />
        <Panel heading="All Orders" orders={totalOrdersList}></Panel>
      </div>
    </div>
  );
};

export default ShowOrders;
