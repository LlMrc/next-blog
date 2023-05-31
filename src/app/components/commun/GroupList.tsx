"use client";



import { Box, IconButton, Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";
import BasicMenu from "../MbileMenuGroup";

type Props = {
  img: string;
  headerTitle: string;
  subTitle: string;
};

const cardStyle = {
  borderRadius: "10px",
  border: "2px solid black",
  padding: "20px",
  minWidth: "6rem",
  opacity: "0.8",
  background: "gray",
  margin: "10px",
  overflow: "hidden",
};

const StyleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px auto",
});

const boxStyle = {
  background: "white",
  opacity: "0.8",
  height: "140px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const GroupList = ({ img, headerTitle, subTitle }: Props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        textAlign: "Center",
        borderRadius: 4,
        margin: "0 6px",
        overflow: "hidden",
      }}
    >
    
      <Box alignItems={"center"} sx={boxStyle}>
        <Stack direction={"row"} spacing={2} >
          <Typography variant="h4" fontWeight={900} letterSpacing={2}>
            {headerTitle}
          </Typography>
          <Typography variant="h4" fontWeight={900} style={{ color: "red" }}>
     
            Group
          </Typography>
  
         <BasicMenu/>
      
        </Stack>

        <Typography variant="body2" letterSpacing={2}>
          {subTitle}
        </Typography>
      </Box>

      <Box
        sx={{
          overflowY: "scroll",
         
          msOverflowStyle: "none",
          height: '100%',
          '&::-webkit-scrollbar':{
            width:0,
        }
        }}
      >
        <StyleBox>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 1</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 2</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 3</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 4</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 5</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 6</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 4</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 5</Typography>
          </Paper>
          <Paper variant="outlined" sx={cardStyle}>
            <Typography variant="h5"> Group title 6</Typography>
          </Paper>
        </StyleBox>
      </Box>
    </Box>
  );
};

export default GroupList;
