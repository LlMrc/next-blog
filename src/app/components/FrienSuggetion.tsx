import { Card, Box, CardContent, Typography, CardMedia, Button } from '@mui/material'
import React from 'react'


type Props={
    image: string,
    name: string
}
const FrienSuggetion = ({image , name}: Props) => {
  return (
    <Card sx={{ display: 'flex', 
    gap: 2, m:2, 
    maxHeight: 120, 
     transition: " .5s  ease-in-out", 
     "&:hover":{ transform: "scale(1.02)", background: "#ECC9EE"}}}>
         <CardMedia
        component="img"
        sx={{ width: 145, }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1">
          {name}
          </Typography>
       
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: "flex-end", gap:1, }}>
           <Button sx={{fontSize: "14px", textTransform: "none"}}> Decline</Button>
           <Button sx={{fontSize: "14px",  textTransform: "none" }} variant='contained'> Accept</Button>
     
         
        </Box>
      </Box>
     
    </Card>
  )
}

export default FrienSuggetion