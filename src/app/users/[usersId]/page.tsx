 'use client'
import React, { FC, Suspense } from 'react'


import { Typography } from '@mui/material'
import fetchPost from '@/lib/getUser'
import getUser from '@/lib/getUser'
import PostModal from '@/app/components/PostModal'
import getPost from '@/lib/getUserPost'




interface PageProps{
    params: {
        userId: string
    }
}



const   user =   async({params :{userId}}: PageProps) =>{
 
 const data: Promise<User> = getUser(userId)
 const postData: Promise<Post[]> = getPost(userId)
 
          const currentPost = await data
 
    
    return (
     <>
      <Typography variant='h4' fontWeight={'bold'} p={2}>{currentPost.name}</Typography> 
      {/* @ts-expect-error Async Server Component */}
      <Suspense fallback={<h2>loading...</h2>}> <PostModal promise={postData}/></Suspense>
  
       
           
       
     </>
    )
}

export default user



