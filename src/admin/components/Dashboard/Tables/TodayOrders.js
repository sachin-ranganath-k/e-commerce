import React from "react";
import { DashboardTable } from "../../../constants/constants";

const TodayOrdersTable = () => {
  return (
    <div>
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>{DashboardTable.SL_NO}</th>
            <th>{DashboardTable.CATEGORY}</th>
            <th>{DashboardTable.BRAND_NAME}</th>
            <th>{DashboardTable.PRODUCT_NAME}</th>
            <th>{DashboardTable.QUANTITY}</th>
            <th>{DashboardTable.ORDERED_BY}</th>
            <th>{DashboardTable.SHOP_ADDRESS}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chocolate</td>
            <td>Dairy Milk</td>
            <td>Dairy Milk Chocolates</td>
            <td>10</td>
            <td>Abhishek</td>
            <td>Near Gandhi Chowk, Savadatti 591126</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Biscuit</td>
            <td>Patanjali</td>
            <td>Patanjali Biscuits</td>
            <td>20</td>
            <td>Sachin</td>
            <td>Near APMC Savadatti 59126</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Soap</td>
            <td>Patanjali</td>
            <td>Haldi Chandan Soap</td>
            <td>50</td>
            <td>Sachin</td>
            <td>Near New Bustand, Savadatti 591126</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodayOrdersTable;
