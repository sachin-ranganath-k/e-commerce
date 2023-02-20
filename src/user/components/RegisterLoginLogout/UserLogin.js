import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignIn_SignUp } from "../../../constants/constants";
import { Link } from "react-router-dom";

const theme = createTheme();

const UserLogin = () => {
  const userMobile = useRef("");

  const submitData = () => {
    alert("Development is going on..!");
  };

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
              <TextField
                margin="normal"
                required
                fullWidth
                id="userContact"
                label="Enter Mobile No."
                name="userMobile"
                ref={userMobile}
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
