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
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/userActions/UserActions";
import AlertMessage from "../../../admin/Alert/Alert";

const theme = createTheme();

const UserRegister = () => {
  const dispatch = useDispatch();
  const { isUserRegisterSuccess } = useSelector(
    (state) => state.UserReducer.userRegister
  );
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
  const userMobile = useRef(null);
  const city = useRef(null);
  const shopAddress = useRef(null);
  const pinCode = useRef(null);

  const validateFields = () => {
    let isValid = true;
    if (
      userName.current.value === "" ||
      !patterns.userName.test(userName.current.value)
    ) {
      setFieldError((prevState) => ({ ...prevState, userNameError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({ ...prevState, userNameError: false }));
      }, 4000);
      isValid = false;
    }
    if (
      userMobile.current.value === "" ||
      !patterns.userContact.test(userMobile.current.value)
    ) {
      setFieldError((prevState) => ({ ...prevState, userMobileError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({
          ...prevState,
          userMobileError: false,
        }));
      }, 4000);
      isValid = false;
    }
    if (
      shopAddress.current.value === "" ||
      !patterns.shopAddress.test(shopAddress.current.value)
    ) {
      setFieldError((prevState) => ({ ...prevState, shopAddressError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({
          ...prevState,
          shopAddressError: false,
        }));
      }, 4000);
      isValid = false;
    }
    if (
      city.current.value === "" ||
      !patterns.userName.test(city.current.value)
    ) {
      setFieldError((prevState) => ({ ...prevState, cityError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({ ...prevState, cityError: false }));
      }, 4000);
      isValid = false;
    }

    if (
      pinCode.current.value === "" ||
      !patterns.pinCode.test(pinCode.current.value)
    ) {
      setFieldError((prevState) => ({ ...prevState, pinCodeError: true }));
      setTimeout(() => {
        setFieldError((prevState) => ({ ...prevState, pinCodeError: false }));
      }, 4000);
      isValid = false;
    }
    return isValid;
  };

  const submitData = () => {
    const formData = {
      user_name: userName.current.value,
      contact_num: userMobile.current.value,
      shop_address: shopAddress.current.value,
      city: city.current.value,
      pincode: pinCode.current.value,
    };
    if (validateFields()) {
      dispatch(registerUser(JSON.stringify(formData)));
      
      userName.current.value = null;
      userMobile.current.value = null;
      shopAddress.current.value = null;
      city.current.value = null;
      pinCode.current.value = null;
    }
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
              {isUserRegisterSuccess &&
                AlertMessage("success", "Registered Successfully..!")}
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Enter Full Name"
                inputRef={userName}
                autoFocus
              />
              {userNameError &&
                handleRegisterError(UserRegisterErrors.userNameError)}
              <TextField
                margin="normal"
                required
                fullWidth
                id="userContact"
                label="Enter Mobile No."
                inputRef={userMobile}
              />
              {userMobileError &&
                handleRegisterError(UserRegisterErrors.userContactError)}
              <br />
              <textarea
                className="form-control"
                required
                id="shopAddress"
                placeholder="Enter Shop Address *"
                ref={shopAddress}
              />
              {shopAddressError &&
                handleRegisterError(UserRegisterErrors.shopAddressError)}
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
              {pinCodeError &&
                handleRegisterError(UserRegisterErrors.pinCodeError)}
              <Button
                fullWidth
                variant="contained"
                onClick={submitData}
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
