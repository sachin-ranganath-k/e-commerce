import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import UpdateUserDetail from "./UpdateUserDetail";
import UpdateUserDetails from "./UpdateUserDetails";

export const UpdateUserLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <UpdateUserDetails />
            </div>
            <div className="col-md-4">
              <UpdateUserDetail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
