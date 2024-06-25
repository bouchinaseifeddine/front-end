import React from 'react'
import { AllButtons } from './Buttons/AllButtons'
import { AllNavigations } from './Navigations/AllNavigations'
import { IconStandard } from './Buttons/iconButton'
import { Menu, Moon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNav } from '../StateManagment/Slices/Dom/NavigationSlice'
import { FilterChips } from './Chipes/FilterChips'
import { AllFormElements } from './Form elements/AllFormElements'

export const Component = () => {
    const nav = useSelector(state => state.Navigation)
    const dispatch = useDispatch()

    const onClick = () => {
        document.documentElement.classList.toggle('dark')
    }
    return (

        <div>
            <div
                className='fixed bottom-4 right-4 flex flex-col gap-4'
            >
                <div>
                    <IconStandard
                        onClick={onClick}
                    >
                        <Moon />
                    </IconStandard>
                </div>
            </div>

            <h1
                className='mt-6 mb-4 text-light-on-background dark:text-dark-on-background text-display-medium '
            >
                Component
            </h1>
            <div
                className='mb-3 text-light-on-background dark:text-dark-on-background text-headline-large'
            >
                Buttons
            </div>
            <AllButtons />
            <div
                className='my-3 text-light-on-background dark:text-dark-on-background text-headline-large'
            >
                Chipes
            </div>
            <FilterChips />

            <div
                className='my-3 text-light-on-background dark:text-dark-on-background text-headline-large'
            >
                Form Elements
            </div>
            <AllFormElements/>

        </div>
    )
}
