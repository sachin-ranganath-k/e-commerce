import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todayOrders,
  totalOrders,
} from "../../../redux/AdminActions/AdminActions";
import Cards from "./Cards";
import Clock from "./Clock";

const CardsParent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todayOrders());
    dispatch(totalOrders());
  }, []);

  const todayOrdersList = useSelector((state) => state.todayOrdersList);
  const todayOrdersCount = todayOrdersList.length;

  const totalOrdersList = useSelector((state) => state.totalOrdersList);
  const totalOrdersCount = totalOrdersList.length;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let dayy = weekday[d.getDay()];

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = `${day}-${month}-${year}`;

  return (
    <div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <Cards title="Today's Orders" value={todayOrdersCount} />
          <br />
        </div>

        <div className="col-xl-3 col-md-6">
          <Cards title="Total Orders" value={totalOrdersCount} />
        </div>

        <div className="col-xl-3 col-md-6">
          <Cards title="Today's Date" value={fullDate + " " + dayy} />
        </div>
        <div className="col-xl-3 col-md-6">
          <Cards title="Current Time" value={<Clock />} />
        </div>
      </div>
    </div>
  );
};

export default CardsParent;
