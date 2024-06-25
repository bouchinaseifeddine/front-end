import React from 'react'
import { CommonButtons } from './commonButtons'
import { IconsButtons } from './iconButton'
import { FABButtons } from './FAB'

export const AllButtons = ({ children }) => {
    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2'
        >
            <CommonButtons />
            <IconsButtons />
            <FABButtons/>
        </div>
    )
}
