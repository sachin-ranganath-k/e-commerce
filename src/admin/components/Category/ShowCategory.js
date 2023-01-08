import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalConstants, Category } from "../../constants/constants";
import {
  cleanUpData,
  fetchCategories,
} from "../../redux/AdminActions/AdminActions";

const ShowCategory = (props) => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.AdminReducer.AllCategoriesList);

  useEffect(() => {
    loadData();
  }, [props.data]);

  const loadData = () => {
    dispatch(fetchCategories());
  };

  return (
    <div>
      <br /> <br /> <br />
      <br />
      {/* <div style={{ fontSize: "22px" }}>Categories List</div> */}
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
           {Category.SHOW_CATEGORY_LIST} {allCategories.length}
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
                {allCategories.length > 0
                  ? allCategories.map((category, index) => (
                      <tr key={category?.category_id}>
                        <td>{index + 1}</td>
                        <td>{category?.category_name}</td>
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

export default ShowCategory;
