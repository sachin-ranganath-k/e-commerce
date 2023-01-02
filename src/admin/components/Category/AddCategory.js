import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { add_Category } from "../../constants/constants";
import {
  addCategory,
  fetchCategories,
} from "../../redux/AdminActions/AdminActions";

const AddCategory = () => {
  const theme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("loginSuccess") === "No") {
      navigate("/");
    }
  }, []);

  const submitCat = {
    "category_name": category,
  };

  const submitData = () => {
    dispatch(addCategory(JSON.stringify(submitCat)));
  };

  return (
    <div>
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
              {addCategory.ADD_CATEGORY_TITLE}
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
                placeholder={addCategory.ENTER_CATEGORY}
                onChange={(e) => setCategory(e.target.value)}
                autoFocus
              />
              <Button
                fullWidth
                variant="contained"
                onClick={submitData}
                sx={{ mt: 3, mb: 2 }}
              >
                {add_Category.ADD_CATEGORY}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddCategory;
