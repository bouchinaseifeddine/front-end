import React from 'react'
import { FilterChips } from './FilterChips'

export const AllChips = () => {
    return (
        <div className='p-8'>
            <h1
                className='text-headline-medium mb-6 dark:text-dark-on-background'
            >
                Chips
            </h1>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2'
            >
                <FilterChips/>
            </div>
        </div>
    )
}
