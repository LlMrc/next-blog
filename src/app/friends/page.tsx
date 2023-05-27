"use client";
import { Avatar, Box, Button, PaletteMode, Stack, Typography } from "@mui/material";

import React from "react";
import BaseLayout from "../components/layout";
import styled from "@emotion/styled";
import HomePage from "../components/HomPage";

     const Btn = styled('div')({display: 'flex', alignItems: 'end', gap:2})
const Friend = () => {
  return (
    <>
      <BaseLayout>
       <HomePage/>
       <Box>
       <Box width={200} height='80%' bgcolor="#B799FF" m={4}>
         <Stack direction='row'>
            <Avatar src="https://th.bing.com/th/id/OIP.EGwGYtcNBLmxK4ZChMhieAHaFL?pid=ImgDet&rs=1"/>
            <Typography> Bill Gates</Typography>
         </Stack>
          <Btn>
             <Button>Accept</Button>
             <Button>Decline</Button>
          </Btn>
        </Box>
        <Box width={200} height='80%' bgcolor="#B799FF" m={4}>
         <Stack direction='row'>
            <Avatar src="https://cdn3.vox-cdn.com/thumbor/7S8n1XL0IChDdcoEug7cP_qBnV0=/0x104:438x396/1280x854/cdn0.vox-cdn.com/imported_assets/846325/steve-jobs-1.jpg"/>
            <Typography> Steeve Jobs</Typography>
         </Stack>
          <Btn>
             <Button>Accept</Button>
             <Button>Decline</Button>
          </Btn>
        </Box>
        <Box width={200} height='80%' bgcolor="#B799FF" m={4}>
         <Stack direction='row'>
            <Avatar src="https://static.theceomagazine.net/wp-content/uploads/2018/07/09100940/Cover-story_Zuckerberg_AU0818-1200x800.jpg"/>
            <Typography> Marck zukerberg</Typography>
         </Stack>
          <Btn>
             <Button>Accept</Button>
             <Button>Decline</Button>
          </Btn>
        </Box>
        <Box width={200} height='80%' bgcolor="#B799FF" m={4}>
         <Stack direction='row'>
            <Avatar src="https://th.bing.com/th/id/R.6f35220e77db0956a6394fbcb18ac265?rik=NMmpHIfQVQkVwA&pid=ImgRaw&r=0"/>
            <Typography>Donald Trump</Typography>
         </Stack>
          <Btn>
             <Button>Accept</Button>
             <Button>Decline</Button>
          </Btn>
        </Box>
        <Box width={200} height='80%' bgcolor="#B799FF" m={4}>
         <Stack direction='row'>
            <Avatar src="https://th.bing.com/th/id/OIP.av9V-gr0034qvTiiK1p5rAHaJ6?pid=ImgDet&rs=1"/>
            <Typography> Leonard da vinci</Typography>
         </Stack>
          <Btn>
             <Button>Accept</Button>
             <Button>Decline</Button>
          </Btn>
        </Box>
         </Box>
        
      </BaseLayout>
    </>
  );
};

Friend;
