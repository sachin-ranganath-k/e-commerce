import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { SPACING } from "../../constants/styleGuide";
import { UPLOAD_BOOKS, TOASTER } from "../../constants/constants";
import axios from "axios";
import { Link } from "react-router-dom";
import "../users/scss/UserRegister.scss";

const UploadBooks = () => {
  const [inputs, setInputs] = useState({
    bookName: "",
    bookAuthor: "",
    viewLink: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { bookName, bookAuthor, viewLink } = inputs;

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const apiCall = () => {
    axios
      .post("http://localhost:3002/books", inputs)
      // .post("http://localhost/api/user/save", inputs)
      .then((res) => {
        console.log(res);
        setSuccessMessage(true);
        setErrorMessage(false);
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage(false);
        setErrorMessage(true);
      });
  };

  const formSubmit = () => {
    if (bookName === "" || bookAuthor === "" || viewLink === "") {
      setErrorMessage(true);
    } else {
      apiCall();
    }
  };

  return (
    <div className="mainBody">
      <br />
      <br />
      <div className="container">
        {successMessage && "Submitted"}
        {errorMessage && "Error..!"}
        <Container maxWidth="md">
          {/* {successMessage && "Submitted"} */}
          {/* {errorMessage && "Error..!"} */}
          <div className="heading">
            <h1>{UPLOAD_BOOKS.BOOKS_UPLOAD}</h1>
          </div>
          <div className="formContainer">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={SPACING.s6}>
                <Grid item xs={SPACING.s6}>
                  <TextField
                    id="bookName"
                    label={UPLOAD_BOOKS.BOOK_NAME}
                    variant="standard"
                    fullWidth="true"
                    name="bookName"
                    value={bookName}
                    onChange={handleInputs}
                  />
                </Grid>
                <Grid item xs={SPACING.s6}>
                  <TextField
                    id="bookAuthor"
                    label={UPLOAD_BOOKS.BOOK_AUTHOR}
                    variant="standard"
                    fullWidth="true"
                    name="bookAuthor"
                    value={bookAuthor}
                    onChange={handleInputs}
                  />
                </Grid>

                <Grid item xs={SPACING.s6}>
                  <TextField
                    id="viewLink"
                    label={UPLOAD_BOOKS.BOOK_LINK}
                    variant="standard"
                    fullWidth="true"
                    name="viewLink"
                    value={viewLink}
                    onChange={handleInputs}
                  />
                </Grid>
                <Grid item xs={SPACING.s12}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth="true"
                    onClick={formSubmit}
                  >
                    {UPLOAD_BOOKS.UPLOAD}
                  </Button>
                </Grid>
              </Grid>
              <br />
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UploadBooks;
