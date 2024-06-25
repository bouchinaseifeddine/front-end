import React from 'react'
import { FAB } from '../../Buttons/FAB'
import { Home, Link, LogOut, Plus } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip } from '../../Tooltip/Tooltip'
import { TextButtonWithIcon } from '../../Buttons/commonButtons'
import { axiosClient } from '../../../Http/axiosClient'
import { clearUser } from '../../../StateManagment/Slices/BackEnd/CurentUserSlice'

export const NSD = ({ children }) => {
    const nav = useSelector(state => state.Navigation);
    document.addEventListener('click', (e) => {
        if (e.target.getAttribute("id") == 'NavigationDrower') {
            e.target.classList.add("max-lg:invisible")
        }
    })
    return (
        <div
            id='NavigationDrower'
            className='fixed top-[65px] z-30 max-lg:inset-0 max-lg:bg-black/40 max-lg:justify-start max-lg:invisible  '
        >
            {
                nav ? (
                    <div
                        className='w-[300px] h-svh lg:h-[calc(100vh_-_65px)]  p-4 flex flex-col items-stretch justify-stretch bg-light-surface-container-low dark:bg-dark-surface-container-low lg:transition-all lg:duration-150 lg:ease-in'
                    >
                        {children}
                    </div>
                ) : (
                    <div
                        className='w-[88px] h-svh lg:h-[calc(100vh_-_65px)]  p-4 flex flex-col items-stretch justify-stretch bg-light-surface-container-low dark:bg-dark-surface-container-low lg:transition-all lg:duration-150 lg:ease-in'
                    >
                        {children}
                    </div>
                )
            }

        </div>
    )
}

NSD.Up = ({ children }) => {
    return (
        <div
            className='flex flex-col gap-4 items-stretch justify-stretch flex-1'
        >
            {children}
        </div>
    )
}

NSD.EFAB = ({ icon = <Plus />, onClick = () => { }, title = "title" }) => {
    const nav = useSelector(state => state.Navigation)

    return nav ?
        (
            <FAB onClick={onClick} isExtended={title}>
                {icon}
            </FAB>
        )
        :
        (
            <FAB onClick={onClick}>
                {icon}
            </FAB>
        )
}

NSD.Profile = ({ to = "#", img = { src: '/src/assets/Gorila.png', alt: "Profile-Pic" }, profileName = "profileName" }) => {
    const nav = useSelector(state => state.Navigation)

    return (
        <NavLink
            to={to}
            className={nav ? `flex items-center  gap-3 ` : `flex items-center justify-center gap-3 `}
        >
            <div
                className='size-11 rounded-full'
            >
                <img
                    src={img.src}
                    alt={img.alt}
                    className='object-cover'
                />
            </div>
            {
                nav && (<div
                    className='text-title-small capitalize text-light-on-surface dark:text-dark-on-surface'
                >
                    {profileName}
                </div>)
            }

        </NavLink>
    )
}

NSD.Devider = () => {
    return (
        <span
            className='h-0.5 w-[calc(100%_-_32px)] self-center bg-light-outline-variant dark:bg-dark-outline-variant'
        >
        </span>

    )
}

NSD.Group = ({ children }) => {
    return (
        <div
            className='flex flex-col gap-3 items-stretch'
        >
            {children}
        </div>
    )
}

NSD.Group.Title = ({ title = "title" }) => {
    const nav = useSelector(state => state.Navigation)
    return nav ? (
        <span
            className='flex justify-start text-light-on-surface dark:text-dark-on-surface'
        >
            {title}
        </span>
    ) : (
        <span
            className='flex justify-center text-light-on-surface dark:text-dark-on-surface'
        >
            {title}
        </span>
    )

}

NSD.Group.Items = ({ children }) => {
    return (
        <span
            className='flex flex-col items-stretch'
        >
            {children}
        </span>
    )
}

NSD.Group.Item = ({ to = '/', icon = <Home />, lable = "Lable text", badge = "" }) => {
    const nav = useSelector(state => state.Navigation)
    return (
        <NavLink
            to={to}
            className=
            {({ isActive }) =>
                isActive
                    ? `group relative px-4 h-14 flex justify-stretch items-center gap-2 rounded-full bg-light-secondary-container dark:bg-dark-secondary-container text-light-on-secondary-container dark:text-dark-on-secondary-container hover:opacity-80 lg:transition-all lg:duration-300 lg:ease-out `
                    : `group relative px-4 h-14 flex justify-stretch items-center gap-2 rounded-full text-light-on-surface dark:text-dark-on-surface hover:bg-light-on-surface/5 hover:dark:bg-dark-on-surface/5 lg:transition-all lg:duration-300 lg:ease-out `
            }
        >
            <span
                className='size-6'
            >
                {icon}
            </span>
            {
                nav && (
                    <>
                        <span
                            className='text-lable-large'
                        >
                            {lable}
                        </span>
                        <span
                            className='text-lable-large'
                        >
                            {badge}
                        </span>
                    </>
                )
            }
            {!nav && (
                <Tooltip dir="right">
                    {lable}
                </Tooltip>
            )}
        </NavLink>
    )

}

NSD.Bottom = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = async () => {
        try {
            await axiosClient('api/v1/logout')
            dispatch(clearUser())
            window.location.assign(import.meta.vite.VITE_FRONT_BASE_URL);
        } catch (error) {
        }

    }
    return (
        <div
            className=' h-14 flex justify-start items-center px-6 '
        >
            <TextButtonWithIcon
                icon={<LogOut />}
                onClick={logout}
            >
                Logout
            </TextButtonWithIcon>
        </div>
    )
}