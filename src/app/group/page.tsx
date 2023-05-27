"use client";

import {styled} from "@mui/system";
import { Box, Paper, Stack } from "@mui/material";



const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export default function Group(){

  return (
    <>
    <Stack direction='row'>
      <Box sx={{width: "200px", height: "100vh", m:"auto", backgroundColor: "#27374D"}}>
        <Paper>iteme1</Paper>
        <Paper>iteme2</Paper>
        <Paper>iteme3</Paper>
      </Box>
      <Box sx={{m:"auto"}} flex={1}>
        <Paper>iteme1</Paper>
        <Paper>iteme2</Paper>
        <Paper>iteme3</Paper>
      </Box>
    </Stack>
    </>
  );
};


