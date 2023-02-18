import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../admin/components/AdminLogin";
import AdminLogout from "../admin/components/AdminLogout";
import AddBrand from "../admin/components/Brand/AddBrand";
import ShowBrand from "../admin/components/Brand/ShowBrand";
import AddShowCat from "../admin/components/Category/AddShowCat";
import Dashboard from "../admin/components/Dashboard/Dashboard";
import FileUpload from "../admin/components/FileUpload";
import ShowOrders from "../admin/components/Orders/ShowOrders";
import AddProduct from "../admin/components/Product/AddProduct";
import UserCart from "../user/components/cart/UserCart";

import Products from "../user/components/Products/Products";
import RegisterLogin from "../user/components/RegisterLoginLogout/RegisterLogin";
import YetToDevelop from "../user/components/YetToDevelop";


const RouteLinks = () => {
  return (
    <div>
      <Router>
        <Routes>
        {/* <Route path="/" element={<FileUpload />} /> */}
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addCategory" element={<AddShowCat />} />
          <Route path="/brands" element={<AddBrand />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/adminLogout" element={<AdminLogout />} />
          <Route path="/orders" element={<ShowOrders />} />

          <Route path="user-register-login" element={<RegisterLogin />} />
          <Route path="/yetToDevelop" element={<YetToDevelop />} />
          <Route path="/userDashboard" element={<Products />} />
          <Route path="/cart" element={<UserCart />} />


        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
