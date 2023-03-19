import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/userActions/UserActions";
import UserNavbar from "../UserNavbar/UserNavbar";

const MyOrders = () => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const { myOrders } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(fetchOrders(userId));
  }, []);

  return (
    <div>
      <UserNavbar />
      {myOrders.length === 0
        ? "No Orders yet"
        : myOrders.map((item) => <p> {item.invoice_number}</p>)}
    </div>
  );
};

export default MyOrders;
