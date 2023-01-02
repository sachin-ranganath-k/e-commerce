import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignIn_SignUp } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmins } from "../redux/AdminActions/AdminActions";
import AlertMessage from "../Alert/Alert";
import { adminLogin, SOMETHING_WENT_WRONG } from "../constants/constants";
import { useNavigate } from "react-router";

const theme = createTheme();

const AdminLogin = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.adminList);
  const loginApiFailure = useSelector((state) => state.adminLoginApiStatus);
  const [invalidCreds, setInvalidCreds] = useState(false);
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState({
    adminEmail: "",
    adminPassword: "",
  });

  useEffect(() => {
    dispatch(fetchAdmins());
    sessionStorage.setItem("loginSuccess", "No");
  }, []);

  const handleFields = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const { adminEmail, adminPassword } = inputFields;
  const submitData = () => {
    for (const adminData of admins) {
      if (adminData?.email_id === adminEmail) {
        navigate("/dashboard");
        sessionStorage.setItem("loginSuccess", "Yes")
        return;
      }
    }
    setInvalidCreds(true);
    // setTimeout(() => {
    //   // setUserExist(false);
    // });
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
              Admin Login
            </Typography>
            {
              admins.map((a)=>{
                console.log(a.email)
              })
            }
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {loginApiFailure === "Failed" &&
                AlertMessage("error", SOMETHING_WENT_WRONG)}
              {invalidCreds && AlertMessage("error", adminLogin.INVALID_CREDS)}
              <TextField
                margin="normal"
                required
                fullWidth
                id="adminEmail"
                label={SignIn_SignUp.ENTER_EMAIL_ADDRESS}
                name="adminEmail"
                value={adminEmail}
                autoComplete="email"
                onChange={handleFields}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="adminPassword"
                value={adminPassword}
                label={SignIn_SignUp.ENTER_PASSWORD}
                type="password"
                id="adminPassword"
                onChange={handleFields}
                autoComplete="current-password"
              />
              <Button
                fullWidth
                variant="contained"
                onClick={submitData}
                sx={{ mt: 3, mb: 2 }}
              >
                {SignIn_SignUp.SIGN_IN}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AdminLogin;
