'use client'

import React, { useState } from 'react'
import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Slide, Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from '@emotion/styled';
import { Height } from '@mui/icons-material';

const AvatarStyled = styled(Box)({display: 'flex', alignItems: 'start'})


const RightBar = () => {
  const [show, setShow] = useState(false)

  const handleChange = ()=>{ 
  return   setShow(!show)
  }

       const Online = styled('div')({width: '15px',  height:'15px', background: '#6ECB63', borderRadius: '50%', margin: "auto 0"})
  return (
    <Box  flex={2} p={2} width={300} mt={6}  sx={{display: {xs:'none', md:'block'}}}>
      <Box position='fixed' bgcolor='#F8E8EE'>
      <Typography variant='h6' fontWeight={200}>Most Popular</Typography>
        
      <AvatarStyled>
      <AvatarGroup color='gray' total={6} >
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3762775/pexels-photo-3762775.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=400" />
      </AvatarGroup>
        </AvatarStyled>
        
      <Typography variant='h6' fontWeight={200} mt={2} >Gallery</Typography>

      <ImageList cols={3} rowHeight={100} gap={5}>
           <ImageListItem>
            <img src='https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='casset'/>
           </ImageListItem>
           <ImageListItem>
            <img src='https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=400' alt='perfum'/>
           </ImageListItem>
           <ImageListItem>
            <img src='https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=400' alt='cake'/>
           </ImageListItem>
           <ImageListItem>
            <img src='https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg?auto=compress&cs=tinysrgb&w=400' alt='girl'/>
           </ImageListItem>
           <ImageListItem>
            <img src='https://images.pexels.com/photos/989962/pexels-photo-989962.jpeg?auto=compress&cs=tinysrgb&w=400' alt='lacost'/>
           </ImageListItem>
    </ImageList>

  

    <Box display="flex" gap={2} p={2} width={140} height={20} textAlign='center'  onClick={handleChange}
     sx={{position: 'fixed', bottom: '0%', right: '0%', cursor:'pointer', background: 'white' ,boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)', zIndex:1, borderRadius:'10px'}}>
      <span style={{fontWeight:'700', fontSize:'1.3rem'}}>Online</span>
      <Online/>
    </Box>

    <Slide direction="up" in={show} timeout={600} >
 
    <List sx={{ width: '100%', margin: '0 10px', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '4px', boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    
  </Slide>
  <Typography variant='h6' fontWeight={200} mt={4} mb={4}>Latest Photos</Typography>
      </Box>
      
    </Box>
  )
}

export default RightBar