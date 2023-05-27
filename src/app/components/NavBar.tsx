'use client'
import { AppBar, Box, Toolbar, styled, Typography, InputBase, Badge, Avatar, MenuItem, Menu } from '@mui/material'
import {Mail, NotificationAdd, Pets } from '@mui/icons-material';
import { useState } from 'react';


const StyledToolBar = styled(Toolbar)({
    display:"flex",

    justifyContent:"space-between",
    
})

const Shearch = styled('div')(({theme})=>({
    padding: '0 10px',
    borderRadius: '40px',
    width:'40%',
    backgroundColor:'white'}))


const Icon = styled(Box)(({theme})=>({
    display:'none', 
alignItems:'center',
[theme.breakpoints.up('sm')]:{ display:'flex'},
 gap:'20px',}))

const UseAvatar = styled(Box)(({theme})=>({
    display:'flex',
     alignItems:'center', 
     [theme.breakpoints.up('sm')]:{ display:'none'},
     gap:'10px'}))

    
function NavBar() {
    const [open, setOpen] = useState(false)
  return (
  <Box>
    <AppBar position='fixed' elevation={0} >
        <StyledToolBar>
            <Typography variant='h6'  sx={{ display: {xs:'none', sm: 'block'}}}>
                MASHPA
            </Typography>
         
            <Pets sx={{display: {xs:'block', sm:'none'}}}/>
          <Shearch><InputBase placeholder='..search'/></Shearch> 
          <Icon>
            <Badge  badgeContent={4} color="warning">  <Mail /></Badge >
            <Badge  badgeContent={5} color="warning">  <NotificationAdd /></Badge >
            <Avatar onClick={e=>setOpen(true)}  alt="Louis Marc" sx={{width:30, height:30}} src="https://media.licdn.com/dms/image/C4E03AQE3sHdhl_gFbA/profile-displayphoto-shrink_800_800/0/1569078145649?e=2147483647&v=beta&t=h3OA1jGhRaPmsHSMa2INoFolQ602Z6tOmy2rtjDrowA" />
            </Icon>
            <UseAvatar onClick={e=> setOpen(true)}>
            <Avatar 
             alt="Louis Marc" 
             sx={{width:30, height:30}}
              src="https://media.licdn.com/dms/image/C4E03AQE3sHdhl_gFbA/profile-displayphoto-shrink_800_800/0/1569078145649?e=2147483647&v=beta&t=h3OA1jGhRaPmsHSMa2INoFolQ602Z6tOmy2rtjDrowA" />
            <Typography >Leo</Typography>
            </UseAvatar>
            <Menu
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    open={open}
    onClose={e=>setOpen(false)}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    <MenuItem >Profile</MenuItem>
    <MenuItem >My account</MenuItem>
    <MenuItem >Logout</MenuItem>
  </Menu>
        </StyledToolBar>
    </AppBar>
  </Box>
        
  )
}

export default NavBar

