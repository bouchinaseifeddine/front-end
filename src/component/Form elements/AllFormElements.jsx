import React from 'react'
import { Input } from './InputFilled/Input'

export const AllFormElements = () => {
    return (
        <div
            className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2'
        >
            <Input />
        </div>
    )
}
