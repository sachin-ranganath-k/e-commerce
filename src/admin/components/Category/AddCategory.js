import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { addCategory } from "../../constants/constants";

const AddCategory = () => {
  const theme = createTheme();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("loginSuccess") === "No") {
      navigate("/");
    }
  }, []);

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
                // onClick={submitData}
                sx={{ mt: 3, mb: 2 }}
              >
                {addCategory.ADD_CATEGORY}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddCategory;
