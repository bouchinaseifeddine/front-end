import { Check, X } from 'lucide-react'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'


export const FilterChips = () => {
    return (
        <div
            className='flex flex-col gap-4 px-4'
        >
            <h1 className='text-headline-small dark:text-dark-on-background'>Filter chips</h1>
            <ul
                className='flex flex-col gap-2'
            >
                <li><ToggelFilterChips></ToggelFilterChips></li>
            </ul>
        </div>
    )

}
export const ToggelFilterChips = (
    {
        id = nanoid(),
        children = "filtred item",
        onClick = () => { },
        leadingIcon = <Check />,
        trailingIcon = <X />
    }) => {

    let chips = {} ;
    useEffect(()=>{
        chips = document.getElementById(id) ;
    })
    return (
        <button
            id={id}
            onClick={()=>{ onClick() ; chips.remove();  }}
            className='h-8 w-fit flex items-center gap-2 px-2 rounded-lg  text-light-on-secondary-container dark:text-dark-on-secondary-container bg-light-secondary-container dark:bg-dark-secondary-container'
        >
            <span
                className='text-[18px] font-normal'
            >
                {leadingIcon}
            </span>
            <span
                className='text-lable-large'
            >
                {children}
            </span>
            <span
                className='text-[18px] font-normal' 
            >
                {trailingIcon}
            </span>
        </button>
    )
}
