import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../admin/components/AdminLogin";
import AdminLogout from "../admin/components/AdminLogout";
import AddBrand from "../admin/components/Brand/AddBrand";
import ShowBrand from "../admin/components/Brand/ShowBrand";
import AddShowCat from "../admin/components/Category/AddShowCat";
import Dashboard from "../admin/components/Dashboard/Dashboard";
import ShowOrders from "../admin/components/Orders/ShowOrders";
import AddProduct from "../admin/components/Product/AddProduct";
import UserCart from "../user/components/cart/UserCart";

import Products from "../user/components/Products/Products";
import UserLogin from "../user/components/RegisterLoginLogout/UserLogin";
import UserLogout from "../user/components/RegisterLoginLogout/UserLogout";
import UserRegister from "../user/components/RegisterLoginLogout/UserRegister";
import UserProfile from "../user/components/UserProfile/UserProfile";
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

          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-logout" element={<UserLogout />} />
          <Route path="/yetToDevelop" element={<YetToDevelop />} />
          <Route path="/userDashboard" element={<Products />} />
          <Route path="/myProfile" element={<UserProfile />} />
          <Route path="/cart" element={<UserCart />} />



        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
