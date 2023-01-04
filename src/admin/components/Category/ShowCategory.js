import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/AdminActions/AdminActions";


const ShowCategory = (props) => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.AllCategoriesList);

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
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {allCategories.map((category, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{category?.category_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCategory;
