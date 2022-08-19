import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import LoginDialog from "../login/LoginDialog";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& >*": {
    marginRight: '40px !important',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: 12,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        color: '#2874f0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    }
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block'
}
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("am")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF'
  }
}));

const CustomButtons = () => {
  const { account, setAccount } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
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
