import React from 'react'

export const Tooltip = ({ children, dir }) => {

    switch (dir) {
        case "top":
            return (
                <div
                    className='h-6 w-fit px-2 z-10  rounded-sm absolute left-1/2 -top-8 origin-center -translate-x-1/2  invisible group-hover:visible transition-all duration-75 ease-out  bg-light-inverse-surface dark:bg-dark-inverse-surface text-light-inverse-on-surface dark:text-dark-inverse-on-surface'
                >
                    {children}
                </div >        
            )
            break;
        case "bottom":
                return (
                    <div
                        className='h-6 w-fit px-2 z-10 rounded-sm absolute left-1/2 -bottom-8  -translate-x-1/2  invisible group-hover:visible transition-all duration-75 ease-out  bg-light-inverse-surface dark:bg-dark-inverse-surface text-light-inverse-on-surface dark:text-dark-inverse-on-surface'
                    >
                        {children}
                    </div >        
                )
                break;
        case "left":
            return (
                <div
                    className='h-6 w-fit px-2 z-10  rounded-sm absolute top-1/2 -left-6  -translate-x-full -translate-y-1/2  invisible group-hover:visible transition-all duration-75 ease-out  bg-light-inverse-surface dark:bg-dark-inverse-surface text-light-inverse-on-surface dark:text-dark-inverse-on-surface'
                >
                    {children}
                </div >        
            )
            break;
        case "right":
            return (
                <div
                    className='h-6 w-fit px-2 z-10  rounded-sm absolute top-1/2 -right-6 translate-x-full -translate-y-1/2  invisible group-hover:visible transition-all duration-75 ease-out  bg-light-inverse-surface dark:bg-dark-inverse-surface text-light-inverse-on-surface dark:text-dark-inverse-on-surface'
                >
                    {children}
                </div >        
            )
            break;
        default:
            return (
                <div
                    className='h-6 w-fit px-2 z-10 rounded-sm absolute left-1/2 -bottom-8  -translate-x-1/2  invisible group-hover:visible transition-all duration-75 ease-out bg-light-inverse-surface dark:bg-dark-inverse-surface text-light-inverse-on-surface dark:text-dark-inverse-on-surface'
                >
                    {children}
                </div >        
            )
            break;
    }
}
