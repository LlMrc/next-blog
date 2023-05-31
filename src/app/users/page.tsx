"use client";

import React from "react";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import {
  Grid,
  Stack,
  Typography,
  Card,
  Box,
  CardContent,
  Button,
  CardActions,
  Paper,
  Avatar,
} from "@mui/material";
import NavBar from "../components/NavBar";
import FrienSuggetion from "../components/FrienSuggetion";



const UsersPAge = async () => {
  const userData: Promise<User[]> = getAllUsers();

  const user = await userData;
  const content = (
    <>
         <NavBar />
         <Stack direction="row">
      <Box flex={1} >
      
        <Grid container gap={4} width="80%" alignItems="center" justifyContent="center" pt={10}>
          {user.map((item) => (
            <Grid key={item.id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345, background: "#F0F0F0"}}>
                <Paper
                elevation={0}
                  sx={{
                    height: 140,
                    maxWidth: 345,
                    background: 'linear-gradient(to right bottom, #917FB3,  #FFB4B4)',
                    display: "flex",
                    alignItems: "center",
                    p: 1, gap:1
                  }}
                >
                  <Avatar sx={{ p:2}}>
                    {item.name[0]}
                  </Avatar>

                  <Box>
                    <Typography gutterBottom variant="h6">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" noWrap={true}>
                      {item.email}
                    </Typography>
                  </Box>
                </Paper>

                <CardContent>
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.phone}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.website}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                  <Button size="small" color="error">
                    Follow
                  </Button>
                  <Button variant="contained"> <Link href={`/users/${item.id}`} style={{textDecoration: "none", color: 'white'}}>Open</Link></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
         
         <Box sx={{width: 360, height: "100vh", pt:10, background: "#F0F0F0", position: "fixed", right: "1px"}}> 
         <Box sx={{position: "relative"}}>
    <Typography variant="h6" m="0 10px"> Friends sugestion</Typography>
     <FrienSuggetion image="https://th.bing.com/th/id/R.eca7ffe2de50cb7f2c4f407523612d18?rik=GklWQDiYHoJF0A&pid=ImgRaw&r=0" name="joe Biden"/>
     <FrienSuggetion image="https://th.bing.com/th/id/R.c20e72e5c89ce4e093bf5d5622717237?rik=9hFMsKawMs1%2bQg&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2018%2f07%2fstevejobs.jpg&ehk=7pVWHdJx%2fCDYlzmIq%2b%2b1GWLWrfhP3E%2b54jFB%2bHEKp5U%3d&risl=&pid=ImgRaw&r=0" name="Steeve jobs"/>
     <FrienSuggetion image="https://th.bing.com/th/id/OIP.iB3FB36TW-vfcN7ya7v9BQHaFj?pid=ImgDet&rs=1" name="Gandalph"/>
     <FrienSuggetion image="https://th.bing.com/th/id/R.6f35220e77db0956a6394fbcb18ac265?rik=NMmpHIfQVQkVwA&pid=ImgRaw&r=0" name="Donald Trump"/>
     <FrienSuggetion image="https://th.bing.com/th/id/R.1cd169417811db6d994fa4a9021bff7a?rik=TROjJ1EfuNr6Qw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-C6KY8tsc8Fw%2fT-SVFnncxjI%2fAAAAAAAAANw%2fFMiNzA8Zecw%2fs1600%2fmr.bean.jpg&ehk=70OQ5gbxSP6DTtEiqVGI4xm6cRTny6guvyupOptnrak%3d&risl=&pid=ImgRaw&r=0" name="Mr Bean"/>
     <FrienSuggetion image="https://th.bing.com/th/id/R.6f35220e77db0956a6394fbcb18ac265?rik=NMmpHIfQVQkVwA&pid=ImgRaw&r=0" name="Donald Trump"/>
     <FrienSuggetion image="https://th.bing.com/th/id/OIP.vvOLmjhwNznwljPnIxDxTQHaGL?pid=ImgDet&rs=1" name="james bernard"/>
   </Box>
   </Box>
    </Stack>
    </>
   
  );
  return content;
};

export default UsersPAge;
