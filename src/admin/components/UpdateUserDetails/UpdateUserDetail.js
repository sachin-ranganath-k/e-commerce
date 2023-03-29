import React from "react";

const UpdateUserDetail = ({ userData }) => {
  const { user_name, shop_address, city, pincode } = userData;

  return (
    <div className="card">
      <div className="card-header">
        <h4>Update User Details</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={user_name}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="shopAddress">Shop Address</label>
            <input
              type="text"
              className="form-control"
              id="shopAddress"
              name="shopAddress"
              value={shop_address}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="pincode"
              value={pincode}
              disabled
            />
          </div>
          <button className="btn btn-primary" disabled>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserDetail;
