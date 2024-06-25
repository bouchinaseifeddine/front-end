import React, { useEffect } from 'react'
import { Bell, Menu, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { IconContained, IconStandard } from '../../Buttons/iconButton'
import { toggleNav } from '../../../StateManagment/Slices/Dom/NavigationSlice'

export const NAB = ({ children }) => {
    const dispatch = useDispatch()

    return (

        <div
            className='fixed z-20 top-0 h-[65px] w-full flex items-center justify-between sm:px-2 bg-light-surface-container-low dark:bg-dark-surface-container-low'
        >
            {children}
        </div>
    )
}

NAB.First = () => {
    const nav = useSelector((state) => state.Navigation)
    const dispatch = useDispatch()

    const resize1 = () => {
        dispatch(toggleNav())
    }

    const resize2 = () => {
        const navigation = document.getElementById('NavigationDrower')
        if (nav === false) {
            dispatch(toggleNav())
        }
        navigation.classList.remove("max-lg:invisible")
    }

    return (
        <div
            className='flex gap-1 md:gap-2 items-center'
        >
            <span className='lg:invisible'>
                <IconContained
                    onClick={resize2}
                >
                    <Menu />
                </IconContained>
            </span>
            <span className='max-lg:invisible'>
                <IconContained
                    onClick={resize1}
                >
                    <Menu />
                </IconContained>
            </span>
            <div className='text-headline-small text-light-on-surface dark:text-dark-on-surface'>
                TAHSEEN
            </div>
        </div>
    )
}

NAB.Second = ({children}) => {
    return (
        <div
            className='flex gap-1 md:gap-2 items-center'
        >
            {children}
        </div>
    )
}

NAB.Notification = () => {
    return (
        <span>
            <IconStandard tooltip={{
                lable: "Notefication",
                dir: "bottom"
            }}>
                <Bell />
            </IconStandard>
        </span>
    )
}

NAB.Mode = ()=>{
    return (
        <span>
                <IconStandard
                    onClick={() => {
                        const htmlElement = document.querySelector('html');
                        htmlElement.classList.toggle('dark');
                        if(htmlElement.classList.contains("dark")){
                            localStorage.setItem("mode" , "dark")
                        }else{
                            localStorage.setItem("mode" , "light")
                        }

                    }}
                    tooltip={{
                        lable: "Mode",
                        dir: "bottom"
                    }}

                >
                    <Sun />
                </IconStandard>
            </span>
    )
}