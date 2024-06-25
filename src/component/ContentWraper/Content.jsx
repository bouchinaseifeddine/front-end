import React from 'react'
import { useSelector } from 'react-redux'
import { FilledButtonWithIcon, TextButtonWithIcon } from '../Buttons/commonButtons'
import { showModal } from '../../Utiliti/dom/modal'
import { Filter } from 'lucide-react'
import { Modal } from '../Modal/Modal'

export const Content = ({ children }) => {
    const nav = useSelector(state => state.Navigation)
    return (
        <div
            className='w-full h-svh flex place-content-end place-items-end '
        >
            {
                nav ? (
                    <div
                        className='p-4 w-[calc(100%_-_320px)] h-[calc(100vh_-_65px)] max-lg:w-full transition-all duration-150 ease-in'
                    >
                        {children}
                    </div>
                ) : (
                    <div
                        className='p-4 w-[calc(100%_-_108px)] h-[calc(100vh_-_65px)] max-lg:w-full transition-all duration-150 ease-in'
                    >
                        {children}
                    </div>
                )
            }
        </div>
    )
}

Content.title = ({ children }) => {
    return (
        <div
            className='text-headline-large text-light-on-surface dark:text-dark-on-surface'
        >
            {children}
        </div>
    )
}

Content.MainAct = ({ icon = <></>, onClick = () => { }, children }) => {
    return (
        <FilledButtonWithIcon onClick={onClick}>
            {children}
        </FilledButtonWithIcon>
    )
}

