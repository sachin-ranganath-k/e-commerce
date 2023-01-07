import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { patterns, Product } from "../../constants/constants";
import axios from "axios";
import { ADD_PRODUCT_API } from "../../AdminEndPoints/AdminEndPoints";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
} from "../../redux/AdminActions/AdminActions";

const AddProduct = () => {
  const theme = createTheme();
  const [product, setProduct] = useState("");
  const [productError, setProductError] = useState(false);
  const [file, setFile] = useState(null);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const dispatch = useDispatch();
  const brandsList = useSelector((state) => state.brands.allBrandsList);
  const categoriesList = useSelector((state) => state.AllCategoriesList);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, []);

  const handleOnChangeFile = (e) => {
    //console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const submitData = () => {
    if (
      product === "" ||
      selectCategory === "" ||
      selectBrand === "" ||
      !patterns.ADD_PCB_PATTERN.test(product)
    ) {
      setProductError(true);
      setTimeout(() => {
        setProductError(false);
      }, 3000);
      return false;
    }
    handleSubmit();
    resetForm();
  };

  const handleSubmit = async () => {
    let res = await uploadFile(file);
    // console.log(res.data);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("product_name", product);
    formData.append("productImage", file);
    formData.append("category_id", selectCategory);
    formData.append("brand_id", selectBrand);

    return await axios.post(ADD_PRODUCT_API, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const handleCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleBrand = (e) => {
    setSelectBrand(e.target.value);
  };

  const resetForm = () => {
    setSelectBrand("");
    setSelectCategory("");
    setProduct("");
    setFile(null);
  };

  return (
    <div className="contsiner">
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
                    {Product.ADD_PRODUCT_TITLE}
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <label htmlFor="category">Select Category</label>
                    <select
                      className="form-control"
                      id="sel1"
                      value={selectCategory}
                      onChange={handleCategory}
                    >
                      <option value="">Select Category</option>
                      {categoriesList.length > 0 &&
                        categoriesList.map((catList) => (
                          <option
                            value={catList?.category_id}
                            key={catList?.category_id}
                          >
                            {catList?.category_name}
                          </option>
                        ))}
                    </select>
                    <br />
                    <label htmlFor="brand">Select Brand</label>
                    <select
                      className="form-control"
                      id="sel1"
                      value={selectBrand}
                      onChange={handleBrand}
                    >
                      <option value="">Select Brand</option>
                      {brandsList.length > 0 &&
                        brandsList.map((brand) => (
                          <option value={brand?.brand_id} key={brand?.brand_id}>
                            {brand?.brand_name}
                          </option>
                        ))}
                    </select>
                    <br />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="product"
                      label=""
                      name="product"
                      value={product}
                      placeholder={Product.ENTER_PRODUCT}
                      onChange={(e) => setProduct(e.target.value)}
                    />
                    {productError && <p style={{ color: "red" }}>Select all</p>}
                    <br /> <br />
                    Select Product Image (Optional)
                    <input type="file" onChange={handleOnChangeFile} />
                    {/* {categoryExist &&
                      AlertMessage("error", Product.PRODUCT_EXIST)}
                    {categoryAddedSuccess &&
                      AlertMessage("success", Product.PRODUCT_ADDED)}  */}
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={submitData}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {Product.ADD_PRODUCT}
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
          {/* 
          <div className="col-md-8">
            <ShowCategory data={allCategories}/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
