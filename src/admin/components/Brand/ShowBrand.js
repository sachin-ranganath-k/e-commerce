import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalConstants } from "../../constants/constants";
import {
  cleanUpData,
  fetchBrands,
} from "../../redux/AdminActions/AdminActions";

const ShowBrand = (props) => {
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.brands.allBrandsList);

  useEffect(() => {
    loadData();
    return () => {
      dispatch(cleanUpData());
    };
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
  );
};

export default ShowBrand;
