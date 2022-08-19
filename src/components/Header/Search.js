import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';


const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const SearchContainer = styled(Box)`
  background: #fff;
  border-radius: 2px;
  display: flex;
  margin-left: 10px;
  width: 38%;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  display: flex;
  padding: 5px;
`;
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Search = () => {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products,brands and more"
        onChange={(e) => getText(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
          <ListWrapper hidden={open}>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem key={product._id}>
                <Link 
                  to={`/product/${product.id}`} 
                  style={{ textDecoration:'nonF', color:'inherit'}}
                  onClick={() => setOpen(true)}  
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }  
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
