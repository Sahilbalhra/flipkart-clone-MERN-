import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const CustomButtons = () => {
  const Wrapper = styled(Box)`
    display: flex;
    margin: 0 0 0 3%;
    & > button,
    & > p,
    & > div {
      margin-right: 40px !important;
      font-size: 16px;
      align-items:center;
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
    padding:5px 40px;
  `;
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography style={{marginLeft:10}}>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
