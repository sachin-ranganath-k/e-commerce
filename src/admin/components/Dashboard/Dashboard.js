import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminSideBar from "./SideBar/AdminSideBar";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("loginSuccess") === "No") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <AdminSideBar />
    </div>
  );
};

export default Dashboard;
