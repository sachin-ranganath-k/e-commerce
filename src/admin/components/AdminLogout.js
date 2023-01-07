import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const AdminLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.getItem("loginSuccess", "No");
    navigate("/");
  }, []);

  return <div></div>;
};

export default AdminLogout;
