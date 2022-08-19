import React from "react";
import {
  Box,
  Typography,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #50c878;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border:none;
  }
`;
const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 1000); //5 hrs *24hrs*60 min*1000milisec

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Rating & 1 Reviews
        <Box component="span">
          <img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>{product.price.mrp}</strike>
        </Box>
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      {/* offer section */}
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get extra 20% off (price inclusive of cashback/coupon) T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Buy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10% T&C
        </Typography>
        <Typography>
          <StyledBadge />
          5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase this product & win a surprise cashback coupon for The Big
          Billion Days Sale 2022 Know More
        </Typography>
        <Typography>
          <StyledBadge />
          Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto
          ₹500* Know More
        </Typography>
      </SmallText>
      {/* table section */}
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery By{date.toDateString()}|₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: 600 }}>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>
                7 day seller replacement policy/brand assistance for device
                issues*
              </Typography>
              <Typography>GST invoice available</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="Flipkart coins" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ color: "#878787" }}>
              {product.description}
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
