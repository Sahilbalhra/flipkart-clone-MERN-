import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
const accountIntitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValues = {
  username: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const { setAccount } = useContext(DataContext);
  const [account, toggleAccount] = useState(accountIntitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login);
  };
  const toggleSignup = () => {
    toggleAccount(accountIntitialValues.signup);
  };
  const toggleLogin = () => {
    toggleAccount(accountIntitialValues.login);
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    // console.log(response);
    if (!response) {
      return;
    }
    handleClose();
    setAccount(signup.firstname);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                label="Enter Username"
                variant="standard"
                name="username"
                onChange={onValueChange}
              />
              {error && <Error>Please enter valid username or password</Error>}

              <TextField
                label="Enter Password"
                variant="standard"
                name="password"
                onChange={onValueChange}
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                label="Enter FirstName"
                variant="standard"
                name="firstname"
                onChange={onInputChange}
              />
              <TextField
                label="Enter LastName"
                variant="standard"
                name="lastname"
                onChange={onInputChange}
              />
              <TextField
                label="Enter UserName"
                variant="standard"
                name="username"
                onChange={onInputChange}
              />
              <TextField
                label="Enter Email"
                variant="standard"
                name="email"
                onChange={onInputChange}
              />
              <TextField
                label="Enter Password"
                variant="standard"
                name="password"
                onChange={onInputChange}
              />
              <TextField
                label="Enter Phone"
                variant="standard"
                name="phone"
                onChange={onInputChange}
              />
              <LoginButton onClick={signupUser}>Continue</LoginButton>
              <RequestOTP onClick={toggleLogin}>
                Existing User?Log in
              </RequestOTP>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
