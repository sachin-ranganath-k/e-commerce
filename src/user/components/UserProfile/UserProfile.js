import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserNavbar from "../UserNavbar/UserNavbar";
import { useSelector } from "react-redux";

const theme = createTheme();

const UserRegister = () => {
  const { singleUser } = useSelector((state) => state.UserReducer.userRegister);

  return (
    <>
      <UserNavbar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              My Profile
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                value={singleUser?.user_name}
                inputProps={{ readOnly: true }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                value={singleUser?.contact_num}
                inputProps={{ readOnly: true }}
              />

              <br />
              <textarea
                className="form-control"
                required
                id="shopAddress"
                value={singleUser?.shop_address}
                readOnly
              />

              <TextField
                margin="normal"
                required
                fullWidth
                value={singleUser?.city}
                inputProps={{ readOnly: true }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                value={singleUser?.pincode}
                inputProps={{ readOnly: true }}
              />
              <p style={{ color: "blue" }}>
                Please contact admin incase of any updates for the above details.
              </p>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default UserRegister;
