import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Brand, GlobalConstants } from "../../constants/constants";
import {
  cleanUpData,
  fetchBrands,
} from "../../redux/AdminActions/AdminActions";

const ShowBrand = (props) => {
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.AdminReducer.brands.allBrandsList);

  useEffect(() => {
    loadData();
  }, [props.data]);

  const loadData = () => {
    dispatch(fetchBrands());
  };

  return (
    <div>
      <br /> <br /> <br />
      <br />
      {/* <div style={{ fontSize: "22px" }}>Brands List</div>  */}
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            {Brand.TOTAL_BRANDS_LIST} {allBrands.length}
          </div>
          <div className="card-body">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {allBrands.length > 0
                  ? allBrands.map((brand, index) => (
                      <tr key={brand.brand_id}>
                        <td>{index + 1}</td>
                        <td>{brand?.brand_name}</td>
                      </tr>
                    ))
                  : GlobalConstants.NO_DATA_FOUND}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBrand;
