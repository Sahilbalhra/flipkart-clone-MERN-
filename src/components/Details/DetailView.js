/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography, styled, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import ActionItem from "./ActionItem";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { id } = useParams();

  const { product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch]);

  // console.log(product.product);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product.product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Rating & 1 Reviews
              <Box component="span">
                <img
                  src={fassured}
                  alt=""
                  style={{ width: 77, marginLeft: 20 }}
                />
              </Box>
            </Typography>
            <Typography>
              <Box component="span" style={{ fontSize: 28 }}>
              ₹{product.product.price.cost}
              </Box>
              &nbsp; &nbsp; &nbsp;
              <Box component="span" style={{ color: "#878787" }}>
                <strike>{product.product.price.mrp}</strike>
              </Box>&nbsp; &nbsp; &nbsp;
              <Box component="span" style={{ color: "#388E3C" }}>
                {product.product.price.discount}
              </Box>
            </Typography>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
