'use client'
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function error({error, reset}:{error: Error, reset:()=> void}) {
  return (
    <Container style={{padding:'60px auto'}}>
        <Box>
            <Typography variant='body1' color={'#1B9C85'}> There was a problem</Typography>
            <Typography variant='h2'> {error.message || 'something went wrong'}</Typography>
            <Typography variant='body2'> Please try again or contact support if the probleme persist</Typography>
            <Stack p={4} direction={'row'}>
                <Button variant='contained' sx={{background: '#1B9C85', opacity:0.5}} onClick={reset}>Try Again</Button>
                <Button variant='outlined'><Link href='/' style={{textDecoration: 'none'}} fontStyle={'none'}>Go Back Home</Link></Button>
            </Stack>
        </Box>
    </Container>
  )
}
