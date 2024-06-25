import React from 'react'
import { NSD } from './NavigationModelDrower/NvaigationUp'
import { Plus } from 'lucide-react'

export const AllNavigations = () => {
  return (
    <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2'
        >
            <NSD>
                <NSD.Up>
                   <NSD.EFAB  title="Create Main Obj" />
                   <NSD.Profile profileName='David villa' />
                   <NSD.Group>
                        <NSD.Group.Title title='Main' />
                        <NSD.Group.Items>
                            <NSD.Group.Item to='/component' lable='Component'/>
                            <NSD.Group.Item to="/testContent" lable="Content" />
                            <NSD.Group.Item />
                        </NSD.Group.Items>
                   </NSD.Group>
                   <NSD.Devider/>
                   <NSD.Group>
                        <NSD.Group.Title title='Profile' />
                        <NSD.Group.Items>
                            <NSD.Group.Item />
                            <NSD.Group.Item />
                            <NSD.Group.Item />
                        </NSD.Group.Items>
                   </NSD.Group>
                </NSD.Up>
            </NSD>
    </div>
  )
}
