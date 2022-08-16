import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Search = () => {
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
