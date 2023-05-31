'use client'


import React from "react";
import { Box, styled } from "@mui/material";
import Post from "./Post";

import AddPost from "./AddPost";


const StyleMargin = styled("div")(({ theme }) => ({
  root: {
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
}));
const HomePage = () => {
  return (
    <>
    <StyleMargin>
      <Box flex={1} p={2}>
        <Post img="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Post img="https://images.pexels.com/photos/164287/pexels-photo-164287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://images.pexels.com/photos/5036698/pexels-photo-5036698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://images.pexels.com/photos/5254651/pexels-photo-5254651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://images.pexels.com/photos/8101834/pexels-photo-8101834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://www.pexels.com/video/red-leaves-in-autumn-1777892/" />
      </Box>
    
      <AddPost />
      
      </StyleMargin>
    </>
  );
};

export default HomePage;
