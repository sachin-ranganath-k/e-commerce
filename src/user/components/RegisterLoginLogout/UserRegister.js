import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { patterns, UserRegisterErrors } from "../../../constants/constants";
import { handleRegisterError } from "../../../utils/UserRegisterErrors";

const theme = createTheme();

const UserRegister = () => {
  const [fieldError, setFieldError] = useState({
    userNameError: false,
    userMobileError: false,
    shopAddressError: false,
    cityError: false,
    pinCodeError: false,
  });

  const {
    userNameError,
    userMobileError,
    shopAddressError,
    cityError,
    pinCodeError,
  } = fieldError;

  const userName = useRef(null);
  const userMobile = useRef("");
  const city = useRef("");
  const shopAddress = useRef("");
  const pinCode = useRef("");

  const validateFields = () => {
    if (userName.current.value === "" || !patterns.userName.test(userName.current.value)) {
      setFieldError((prevState) => ({ ...prevState, userNameError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({ ...prevState, userNameError: false }));
      }, 4000);
      return false;
    }
    if (userMobile.current.value === "" || patterns.userContact.test(userMobile.current.value)) {
      setFieldError((prevState) => ({ ...prevState, userMobileError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({
          ...prevState,
          userMobileError: false,
        }));
      }, 4000);
      return false;
    }
    else{
        alert("Vaild")
    }
    if (city.current.value === "" || !patterns.userName.test(city)) {
      setFieldError((prevState) => ({ ...prevState, cityError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({ ...prevState, cityError: false }));
      }, 4000);
      return false;
    }
    if (shopAddress.current.value === "" || patterns.shopAddress.test(shopAddress)) {
      setFieldError((prevState) => ({ ...prevState, shopAddressError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({
          ...prevState,
          shopAddressError: false,
        }));
      }, 4000);
      return false;
    }
    if (pinCode.current.value === "" || patterns.pinCode.test(pinCode)) {
      setFieldError((prevState) => ({ ...prevState, pinCodeError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({ ...prevState, pinCodeError: false }));
      }, 4000);
      return false;
    }
  };

  const submitData = () => {
    alert("Development is going on..!");
  };

  return (
    <>
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Register
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Enter Full Name"
                inputRef={userName}
                autoFocus
              />
              {userNameError && handleRegisterError(UserRegisterErrors.userNameError)}
              <TextField
                margin="normal"
                required
                fullWidth
                id="userContact"
                label="Enter Mobile No."
                inputRef={userMobile}
              />
               {userMobileError && handleRegisterError(UserRegisterErrors.userContactError)}
              <br />
              <br />
              <textarea
                className="form-control"
                required
                id="shopAddress"
                placeholder="Enter Shop Address *"
                inputRef={shopAddress}
              />
              {shopAddressError && handleRegisterError(UserRegisterErrors.shopAddressError)}
              <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                label="Enter City"
                inputRef={city}
              />
              {cityError && handleRegisterError(UserRegisterErrors.cityError)}
              <TextField
                margin="normal"
                required
                fullWidth
                id="pinCode"
                label="Enter City Pincode"
                inputRef={pinCode}
              />
              {pinCodeError && handleRegisterError(UserRegisterErrors.pinCodeError)}
              <Button
                fullWidth
                variant="contained"
                onClick={validateFields}
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default UserRegister;
