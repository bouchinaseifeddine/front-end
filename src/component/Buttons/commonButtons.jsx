import { Plus } from 'lucide-react'
import { nanoid } from 'nanoid'
import React from 'react'

export const CommonButtons = () => {
    return (
        <>
            <div
                className='flex flex-col gap-4 px-4'
            >
                <h1 className='text-headline-small dark:text-dark-on-background'>Common buttons</h1>
                <ul
                    className='flex flex-col gap-2'
                >
                    <li><FilledButton></FilledButton></li>
                    <li><FilledButtonWithIcon></FilledButtonWithIcon></li>
                    <li><FilledTonalButton></FilledTonalButton></li>
                    <li><FilledTonalButtonWithIcon></FilledTonalButtonWithIcon></li>
                    <li><OutlineButton></OutlineButton></li>
                    <li><OutlineButtonWithIcon></OutlineButtonWithIcon></li>
                    <li><TextButton></TextButton></li>
                    <li><TextButtonWithIcon></TextButtonWithIcon></li>
                </ul>
            </div>
        </>
    )
}

export const FilledButton = (
    {
        children = "Filled button",
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit px-6 rounded-full flex items-center text-lable-large text-light-on-primary dark:text-dark-on-primary bg-light-primary dark:bg-dark-primary hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {children}
        </button>
    )
}

export const FilledButtonWithIcon = (
    {
        children = "Filled button",
        icon = <Plus />,
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit pe-4 ps-6 gap-2 rounded-full flex items-center text-lable-large text-light-on-primary dark:text-dark-on-primary bg-light-primary dark:bg-dark-primary hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}


export const FilledTonalButton = (
    {
        children = "Filled tonal button",
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit px-6 rounded-full flex items-center text-lable-large text-light-on-secondary dark:text-dark-on-secondary bg-light-secondary dark:bg-dark-secondary hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {children}
        </button>
    )
}

export const FilledTonalButtonWithIcon = (
    {
        children = "Filled Tonal Button",
        icon = <Plus />,
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit pe-4 ps-6 gap-2 rounded-full flex items-center text-lable-large text-light-on-secondary dark:text-dark-on-secondary bg-light-secondary dark:bg-dark-secondary hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}


export const OutlineButton = (
    {
        children = "Filled tonal button",
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit px-6 rounded-full flex items-center text-lable-large text-light-primary dark:text-dark-primary border border-light-outline dark:border-dark-outline hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {children}
        </button>
    )
}

export const OutlineButtonWithIcon = (
    {
        children = "Filled Tonal button",
        icon = <Plus />,
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit pe-4 ps-6 gap-2 rounded-full flex items-center text-lable-large text-light-primary dark:text-dark-primary border border-light-outline dark:border-dark-outline hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

export const TextButton = (
    {
        children = "Text button",
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit px-6 rounded-full flex items-center text-lable-large text-light-primary dark:text-dark-primary  hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {children}
        </button>
    )
}

export const TextButtonWithIcon = (
    {
        children = "Text button",
        icon = <Plus />,
        onClick = () => { },
        type = "button",
        id = nanoid()
    }
) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className='h-10 w-fit pe-4 ps-6 gap-2 rounded-full flex items-center text-lable-large text-light-primary dark:text-dark-primary  hover:opacity-70 transition-colors duration-200 ease-out'
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

