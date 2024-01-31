import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button } from "@mui/material";
type Props = {};

const BackButton = (props: Props) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      gap={"8px"}
    >
      <Button variant="outlined" sx={{width:20,display:'flex',justifyContent:'center'}}>
        <Box sx={{transform:'translateX(3px)'}}>
        <ArrowBackIosIcon />

        </Box>
      </Button>
    </Box>
  );
};

export default BackButton;
