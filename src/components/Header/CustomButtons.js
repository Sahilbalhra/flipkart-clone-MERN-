import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import LoginDialog from "../login/LoginDialog";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 0 0 3%;
  & > button,
  & > p,
  & > div {
    margin-right: 40px !important;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  padding: 5px 40px;
`;

const CustomButtons = () => {
  const { account,setAccount } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
       <Profile account={account} setAccount={setAccount}/>
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
