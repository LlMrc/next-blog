
'use client'
import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomPage";
import BaseLayout from "./components/layout";
import RightBar from "./components/RightBar";



export default function Home() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <BaseLayout>
         
      <Stack direction='row'>
        <HomePage />
        <RightBar/>
      </Stack>
   
      </BaseLayout>
    </Box>
  );
}
