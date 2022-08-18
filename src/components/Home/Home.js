import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Navbar from "./Navbar";
import MidSlide from "./MidSlide";
import Slide from "./Slide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 20px 10px;
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
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top picks" timer={false} />
        <Slide
          products={products}
          title="Top Deal's on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
