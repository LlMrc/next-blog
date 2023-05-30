import GroupList from '@/app/components/commun/GroupList'
import GroupLayout from '@/app/components/commun/layout'
import React from 'react'


const Travel = () => {
  return (
    <GroupLayout>
    <GroupList img="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" headerTitle="Travel" subTitle={'You deserve a break today'}/>
    </GroupLayout>
  )
}

export default Travel