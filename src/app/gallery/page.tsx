"use client";
import { Box, CardMedia, Container, Grid, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import React from "react";

import getAllPhoto from "@/lib/getPhoto";
import BaseLayout from "../components/layout";

const MarketPlace = async () => {
  const photoData: Promise<Photo[]> = getAllPhoto();
  const data = await photoData;
 

  return (
    <BaseLayout>

   <Container  sx={{ height:'100%', margin: '0 auto',  marginLeft:{sm: '0', md: '15px'}}} >
   <Typography
        variant="h4"
        p={4}
        textAlign={'center'}
        textTransform={"uppercase"}
        fontWeight={"bold"} >
        MY GALLERY
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
  {data.map((item) => (
    <ImageListItem key={item.id}>
    
      <img
        src={`${item.url}?w=248&fit=crop&auto=format`}
        srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
   </Container>

    </BaseLayout>
  );
};

export default MarketPlace;
