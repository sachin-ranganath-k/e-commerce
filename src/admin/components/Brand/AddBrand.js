import React, { lazy, Suspense, useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { Brand, Category, patterns } from "../../constants/constants";
import { addBrand, fetchBrands } from "../../redux/AdminActions/AdminActions";
import AlertMessage from "../../Alert/Alert";
import { BRAND_ADDED_SUCCESS_STATUS } from "../../redux/AdminActions/AdminActionConstants";

const ShowBrand = lazy(() => import("../Brand/ShowBrand"));

const AddBrand = () => {
  const theme = createTheme();
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.AdminReducer.brands.allBrandsList);
  const brandAddedSuccess = useSelector(
    (state) => state.AdminReducer.brands.newBrandAddedSuccess
  );

  const [brand, setBrand] = useState("");
  const [brandError, setBrandError] = useState(false);
  const [brandExist, setBrandExist] = useState(false);

  const submitBrand = {
    brand_name: brand,
  };

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  const submitData = () => {
    if (brand === "" || !patterns.ADD_PCB_PATTERN.test(brand)) {
      setBrandError(true);
      setTimeout(() => {
        setBrandError(false);
      }, 3000);
      return false;
    }

    if (allBrands.length > 0) {
      for (const a of allBrands) {
        if (a.brand_name === brand.toUpperCase().trim()) {
          setBrandExist(true);
          setTimeout(() => {
            setBrandExist(false);
          }, 3000);
          return;
        }
      }
    }

    dispatch(addBrand(JSON.stringify(submitBrand)));

    setTimeout(() => {
      dispatch({ type: BRAND_ADDED_SUCCESS_STATUS, payload: false });
    }, 3000);
    setBrand("");
  };

  return (
    <>
      <AdminNavbar />
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
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
                    {Brand.ADD_BRAND_TITLE}
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="category"
                      label=""
                      name="category"
                      value={brand}
                      placeholder={Brand.ENTER_BRAND}
                      onChange={(e) => setBrand(e.target.value)}
                      autoFocus
                    />
                    {brandError && (
                      <p style={{ color: "red" }}>{Brand.ERROR}</p>
                    )}
                    {brandExist && AlertMessage("error", Brand.BRAND_EXIST)}
                    {brandAddedSuccess &&
                      AlertMessage("success", Brand.BRAND_ADDED)}
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
            <Suspense fallback="Loading Data..!">
              <ShowBrand data={allBrands} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
