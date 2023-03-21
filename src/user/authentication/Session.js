export const isAuthenticUser = () => {
  const loginStatus = sessionStorage.getItem("loginSuccess");
  if (loginStatus === "No") {
    return false;
  }
  return true;
};

export const initializeLogin = () => {
  sessionStorage.setItem("loginSuccess", "Yes");
};
