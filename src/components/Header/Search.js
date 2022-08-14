import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Search = () => {
  const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
  `;
  const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    margin-left: auto;
    display: flex;
  `;
  const InputSearchBase = styled(InputBase)`
    font-size: unset;
    width: 100%;
    padding-left: 20px;
  `;
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products,brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
