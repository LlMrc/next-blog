 'use client'
import React from 'react'
import getUser from '@/lib/getUser'
import getPost from '@/lib/getUserPost'
import { Typography } from '@mui/material'
import UserPost from '@/app/components/UserPost'
import { Suspense } from 'react'
import { Metadata } from 'next'

type Params = {
    params: {
        userId: string}
}

export async function generateMedatada({params: {userId}}: Params): Promise<Metadata>{
    const userData: Promise<User> = getUser(userId)
    const user = await userData
    return {
        title: user.name
    }
}

export default async function User({params: {userId}}: Params) {
  
    const userData: Promise<User> = getUser(userId)
    const postData: Promise<Post[]> = getPost(userId)

      const user = await userData

      
    return (
     <>
      <Typography variant='h4'>{user.name}</Typography> 
     <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
     <UserPost promise={postData}/>
     </Suspense>
           
       
     </>
    )
}