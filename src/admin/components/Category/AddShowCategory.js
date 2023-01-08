import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { Category, patterns } from "../../constants/constants";
import {
  addCategory,
  fetchCategories,
} from "../../redux/AdminActions/AdminActions";
import AlertMessage from "../../Alert/Alert";
import { CATEGORY_ADDED_SUCCESS_STATUS } from "../../redux/AdminActions/AdminActionConstants";

const AddShowCategory = () => {
  const theme = createTheme();
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.AdminReducer.AllCategoriesList);
  const categoryAddedSuccess = useSelector(
    (state) => state.AdminReducer.newCategoryAddedSuccess
  );
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [categoryExist, setCategoryExist] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [fetchCategories()]);

  const submitCat = {
    category_name: category,
  };

  const submitData = () => {
    if (category === "" || !patterns.ADD_PCB_PATTERN.test(category)) {
      setCategoryError(true);
      setTimeout(() => {
        setCategoryError(false);
      }, 3000);
      return false;
    }

    if(allCategories.length>0){
      for (const a of allCategories) {
        if (a.category_name === category.toUpperCase().trim()) {
          setCategoryExist(true);
          setTimeout(() => {
            setCategoryExist(false);
          }, 3000);
          return;
        }
      }
    }
  

    dispatch(addCategory(JSON.stringify(submitCat)));
    setTimeout(() => {
      dispatch({ type: CATEGORY_ADDED_SUCCESS_STATUS, payload: false });
    }, 3000);
    setCategory("");
  };

  return (
    <>
      <AdminNavbar />
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            {/* <AddCategory /> */}

            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    {Category.ADD_CATEGORY_TITLE}
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="category"
                      label=""
                      name="category"
                      value={category}
                      placeholder={Category.ENTER_CATEGORY}
                      onChange={(e) => setCategory(e.target.value)}
                      autoFocus
                    />
                    {categoryError && (
                      <p style={{ color: "red" }}>{Category.ERROR}</p>
                    )}
                    {categoryExist &&
                      AlertMessage("error", Category.CATEGORY_EXIST)}
                    {categoryAddedSuccess &&
                      AlertMessage("success", Category.CATEGORY_ADDED)}
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={submitData}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {Category.ADD_CATEGORY}
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>

          <div className="col-md-8">
            <br /> <br /> <br />
            <Typography
              component="h1"
              variant="h5"
              style={{ textAlign: "center" }}
            >
              {Category.SHOW_CATEGORY_LIST}
            </Typography>
            <br />
            <div className="container">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {allCategories.length > 0 &&
                    allCategories.map((category, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{category?.category_name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShowCategory;
