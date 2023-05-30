import GroupList from '@/app/components/commun/GroupList'
import GroupLayout from '@/app/components/commun/layout'
import React from 'react'


const Photography = () => {
  return (
    <GroupLayout>
    <GroupList img="https://images.pexels.com/photos/5050413/pexels-photo-5050413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" headerTitle='All Photography' subTitle={'Connecting people through photography'}/>
    </GroupLayout>
  )
}

export default Photography