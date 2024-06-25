import React, { useEffect, useState } from 'react'
import { Content } from '../../component/ContentWraper/Content'
import { Navigation } from '../NavigationBar/Navigation'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationAppBar } from '../NavigationBar/NavigationAppBar'
import { axiosClient } from '../../Http/axiosClient'
import { setUser, setUserType } from '../../StateManagment/Slices/BackEnd/CurentUserSlice'

export const MainContent = () => {
    const {token} = useSelector((state) => state.CurentUser)
    const dispatch = useDispatch()
    const getUser = async ()=>{
        try {
            const resopnse = await axiosClient('api/v1/user')
            dispatch(setUser(resopnse.data.userInfo))
            dispatch(setUserType(resopnse.data.userInfo.key.profileable_type))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUser()
    },[token])

    return token !==  "" ? (
        <>
            <NavigationAppBar/>
            <Navigation />
            <Content>
                <Outlet/>
            </Content>
        </>
    ):(
        <Outlet/>
    )
}
