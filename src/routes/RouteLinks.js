import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../admin/components/AdminLogin";
import AddShowCategory from "../admin/components/Category/AddShowCategory";
import Dashboard from "../admin/components/Dashboard/Dashboard";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addCategory" element={<AddShowCategory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
