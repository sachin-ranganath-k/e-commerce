export const SignIn_SignUp = {
  SIGN_IN: "Sign In",
  ENTER_EMAIL_ADDRESS: "Enter Email ID",
  ENTER_PASSWORD: "Enter Password",
  ALREADY_HAVE_ACCOUNT:"Already have account? Login here",
  DONT_HAVE_ACCOUNT:"Don't have account? Register here",
  USER_LOGIN_ERROR:"Mobile number not registered..!"
};

export const UserRegisterErrors = {
  userNameError:"Name should not be blank, should contain only letters and can have only one space",
  userEmailError: "Enter valid email",
  userContactError: "Enter valid contact no.",
  shopAddressError: "Shop address should contain min 10 characters",
  cityError:"City should contain only letters and can have only one space",
  pinCodeError: "Pincode should be of 6 digits",
};

export const patterns = {
  userName: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
  userEmail: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  userContact:  /^[1-9][0-9]{9}$/,
  shopAddress: /^[A-Za-z\s]{10,100}$/,
  pinCode: /^\d{6}$/,
};
