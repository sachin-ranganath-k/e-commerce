import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../admin/components/AdminLogin";
import AdminLogout from "../admin/components/AdminLogout";
import AddBrand from "../admin/components/Brand/AddBrand";
import AddShowCat from "../admin/components/Category/AddShowCat";
import Dashboard from "../admin/components/Dashboard/Dashboard";
import ShowOrders from "../admin/components/Orders/ShowOrders";
import AddProduct from "../admin/components/Product/AddProduct";
import UpdateUserDetail from "../admin/components/UpdateUserDetails/UpdateUserDetail";
import UpdateUserDetails from "../admin/components/UpdateUserDetails/UpdateUserDetails";
import { UpdateUserLayout } from "../admin/components/UpdateUserDetails/UpdateUserLayout";
import CartCheckout from "../user/components/cart/CartCheckout";
import UserCart from "../user/components/cart/UserCart";
import MyOrders from "../user/components/orders/MyOrders";
import OrderInvoice from "../user/components/orders/OrderInvoice";
import OrderPlaced from "../user/components/orders/OrderPlaced";

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
          <Route path="/updateUserDetails" element={<UpdateUserDetails />} />
          <Route path="/updateUserDetails/:userId" element={<UpdateUserDetails />} />

          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-logout" element={<UserLogout />} />
          <Route path="/yetToDevelop" element={<YetToDevelop />} />
          <Route path="/userDashboard" element={<Products />} />
          <Route path="/myProfile" element={<UserProfile />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/cart" element={<UserCart />} />
          <Route path="/checkout" element={<CartCheckout />} />
          <Route path="/orderPlaced" element={<OrderPlaced />} />
          <Route path="orderInvoice/:orderId" element={<OrderInvoice />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
