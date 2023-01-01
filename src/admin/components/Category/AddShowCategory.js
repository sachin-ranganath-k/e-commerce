import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AddCategory from "./AddCategory";
import ShowCategory from "./ShowCategory";

const AddShowCategory = () => {
  return (
    <>
      <AdminNavbar />
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <AddCategory />
          </div>
          <div className="col-md-8">
            <ShowCategory />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShowCategory;
