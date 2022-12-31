import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../admin/components/AdminLogin";
import Dashboard from "../admin/components/Dashboard/Dashboard";

const RouteLinks = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteLinks;
