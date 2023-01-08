import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard, DashboardTable } from "../../../constants/constants";
import { todayOrders } from "../../../redux/AdminActions/AdminActions";

const TodayOrdersTable = () => {
  const dispatch = useDispatch();
  const todayOrdersList = useSelector((state) => state.AdminReducer.todayOrdersList);

  useEffect(() => {
    dispatch(todayOrders());
  }, []);

  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>{DashboardTable.SL_NO}</th>
            <th>{DashboardTable.CATEGORY}</th>
            <th>{DashboardTable.BRAND_NAME}</th>
            <th>{DashboardTable.PRODUCT_NAME}</th>
            <th>{DashboardTable.QUANTITY}</th>
            <th>{DashboardTable.ORDERED_BY}</th>
            <th>{DashboardTable.CONTACT_NO}</th>
          </tr>
        </thead>
        <tbody>
          {todayOrdersList.length > 0
            ? todayOrdersList.map((order, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{order?.category}</td>
                  <td>{order?.brand}</td>
                  <td>{order?.product}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.ordered_by}</td>
                  <td>{order?.contact_num}</td>
                </tr>
              ))
            : Dashboard.NO_ORDERS_TODAY}
        </tbody>
      </table>
    </div>
  );
};

export default TodayOrdersTable;
