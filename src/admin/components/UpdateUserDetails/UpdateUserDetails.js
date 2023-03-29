import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../../user/redux/userActions/UserActions";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import UpdateUserDetail from "./UpdateUserDetail";

const UpdateUserDetails = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.UserReducer.userRegister);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="col-md-12">
      <AdminNavbar />
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h2>Registered Users</h2>
              </div>
              <br />

              <div className="card-body">
                {allUsers.message === "No records found" ? (
                  <h2>No users registered yet</h2>
                ) : (
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Shop Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{user?.user_name}</td>
                            <td>
                              {user?.shop_address} {user?.city} {user?.pincode}
                            </td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => handleUserClick(user)}
                              >
                                Update Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {selectedUser && <UpdateUserDetail userData={selectedUser} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserDetails;
