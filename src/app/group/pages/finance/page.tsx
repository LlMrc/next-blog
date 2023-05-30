import GroupList from '@/app/components/commun/GroupList'
import GroupLayout from '@/app/components/commun/layout'
import React from 'react'


const Finance = () => {
  return (
    <GroupLayout>
     <GroupList img="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" headerTitle="All Finance " subTitle={'international market data'}/>
    </GroupLayout>
  )
}

export default Finance