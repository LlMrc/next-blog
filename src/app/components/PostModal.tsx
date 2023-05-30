'use client'


import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

const style = {
  display: "block",
  borderRadius: 8,
  margin: "1rem auto",
  border: "1px solide grey",
  maxWidth: "50rem",
  background: 'rgba(0, 0, 0, 0.18)',

};

const PostModal = async ({ promise }: Props) => {
  const postData = await promise;

  return (
    <Box>
      {postData.map((item) => {
        return (
          <Box key={item.id} sx={style}>
           
            <Typography p={4} variant="h5" fontWeight={'600'}> {item.title}</Typography>
            <Divider />
            <Box p={2}> 
                <Typography variant="h6">{item.body}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default PostModal;
