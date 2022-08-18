import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const dispatch = useDispatch();
  const getProduct = useSelector((state) => state.getProducts);
  const { products } = getProduct;
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <Slide products={products}/>
        <Slide products={products}/>
        <Slide products={products}/>
        <Slide products={products}/>
        <Slide products={products}/>
      </Component>
    </>
  );
};

export default Home;
