import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/AdminActions/AdminActions";

const ShowCategory = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.AllCategoriesList);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
            {/* {allCategories.map((category) => {
              let sl = 1;
              <tr>
                <td>{sl++}</td>
                <td>{category?.category_name}</td>
              </tr>
             })}  */}
            <tr>
              <td>1</td>
              <td>Biscuit</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Chocolate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCategory;
