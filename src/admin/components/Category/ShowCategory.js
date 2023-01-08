import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalConstants, Category } from "../../constants/constants";
import {
  cleanUpData,
  fetchCategories,
} from "../../redux/AdminActions/AdminActions";

const ShowCategory = (props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const allCategories = useSelector((state) => state.AdminReducer.AllCategoriesList);

  const sortedCategories=allCategories.sort()

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
           <input
              type="text"
              style={{ float: "right" }}
              placeholder="Search Category"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
                  ? sortedCategories
                      .filter((value) => {
                        if (searchQuery === "") {
                          return value;
                        } else if (
                          value.category_name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((category, index) => (
                        <tr key={category.category_id}>
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
