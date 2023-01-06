import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../admin/components/AdminLogin";
import AddBrand from "../admin/components/Brand/AddBrand";
import ShowBrand from "../admin/components/Brand/ShowBrand";
import AddShowCat from "../admin/components/Category/AddShowCat";
import Dashboard from "../admin/components/Dashboard/Dashboard";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addCategory" element={<AddShowCat />} />
          <Route path="/brands" element={<AddBrand />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
