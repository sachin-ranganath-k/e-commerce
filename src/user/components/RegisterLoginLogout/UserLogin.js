import React, { useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignIn_SignUp } from "../../../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userActions/UserActions";
import AlertMessage from "../../../admin/Alert/Alert";

const theme = createTheme();

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.UserReducer.userRegister.allUsers);
  const userMobile = useRef("");
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // const isUserExistsValidate = () => {
  //   let isUserExist=true;
  //   for (const user of allUsers) {
  //     if (user?.contact_num === userMobile.current.value) {
  //       isUserExist = true;
  //     } else {
  //       isUserExist = false;
  //     }
  //     return isUserExist;
  //   }
  // };

  const submitData = () => {
    for (const user of allUsers) {
      if (user?.contact_num === userMobile.current.value) {
        sessionStorage.setItem("userId", user.user_id);
        navigate("/userDashboard");
        return;
      }
    }
    setLoginError(true);
  };

  if (loginError) {
    setTimeout(() => {
      setLoginError(false);
    }, 4000);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {loginError &&
                AlertMessage("error", SignIn_SignUp.USER_LOGIN_ERROR)}
              <TextField
                margin="normal"
                required
                fullWidth
                id="userContact"
                label="Enter Mobile No."
                name="userMobile"
                inputRef={userMobile}
                autoFocus
              />
              <Button
                fullWidth
                variant="contained"
                onClick={submitData}
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Link to="/user-register" style={{ textDecoration: "none" }}>
                {SignIn_SignUp.DONT_HAVE_ACCOUNT}
              </Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default UserLogin;
