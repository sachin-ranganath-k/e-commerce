import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const UserLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.getItem("userId");
    sessionStorage.clear();
    navigate("/user-login");
  }, []);
  return <div></div>;
};

export default UserLogout;
