import React from 'react'
import { NSD } from '../../component/Navigations/NavigationModelDrower/NvaigationUp'
import { useSelector } from 'react-redux'

export const Navigation = () => {
    const { user, userType } = useSelector(state => state.CurentUser)
    return (
        <NSD>
            <NSD.Up>
                <NSD.Profile profileName={`${user?.name} ${user.last ?? ""}`} />
                {(userType === 'admin') && (
                    <>
                        <NSD.Group>
                            <NSD.Group.Title title='الرئيسية' />
                            <NSD.Group.Items>
                                <NSD.Group.Item to='/' lable='المدرسة' />
                            </NSD.Group.Items>
                        </NSD.Group>
                        <NSD.Devider />
                    </>
                )}
                {(userType === 'school') && (
                    <>
                        <NSD.Group>
                            <NSD.Group.Title title='الرئيسية' />
                            <NSD.Group.Items>
                                <NSD.Group.Item to='/' lable='الطالب' />
                            </NSD.Group.Items>
                        </NSD.Group>
                        <NSD.Devider />
                    </>
                )}
            </NSD.Up>
            <NSD.Bottom />
        </NSD>
    )
}
