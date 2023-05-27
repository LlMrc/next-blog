'use client'


import React from "react";

import { Box } from "@mui/material";
import Post from "./Post";
import RightBar from "./RightBar";
import Add from "./Add";

const HomePage = () => {
  return (
    <>
      <Box flex={6} p={2}>
        <Post img="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Post img="https://images.pexels.com/photos/164287/pexels-photo-164287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://images.pexels.com/photos/5036698/pexels-photo-5036698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://images.pexels.com/photos/5254651/pexels-photo-5254651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Post img="https://images.pexels.com/photos/8101834/pexels-photo-8101834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Box>
      <Add />
    
    </>
  );
};

export default HomePage;
