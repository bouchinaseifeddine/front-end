import React from 'react'
import { Tooltip } from '../Tooltip/Tooltip'
import { Plus } from 'lucide-react'

export const FABButtons = ()=>{
    return (
        <>
            <div
                className='flex flex-col gap-4 px-4'
            >
                <h1 className='text-headline-small dark:text-dark-on-background'>Icons buttons</h1>
                <ul
                    className='flex flex-col gap-4'
                >
                    <li 
                        className="flex flex-col gap-2  items-start"
                    > 
                        <FAB tooltip={{lable:"FAB" , dir:"right"}} ></FAB> 
                        <FAB  isExtended="ExtendedFAB"></FAB>
                    </li>
                </ul>
            </div>
        </>
    )
}
export const FAB = ({ children = <Plus/>, tooltip = {lable : 'tooltip' , dir : 'right'} , isExtended = false , onClick = ()=>{}   }) => {
  return (
    <button
        onClick={onClick}
        className='relative group h-14 bg-light-secondary dark:bg-dark-secondary text-light-on-secondary dark:text-dark-on-secondary  flex place-content-center place-items-center p-4 gap-2 rounded-2xl hover:opacity-70 shadow-sm lg:transition-all lg:duration-150 lg:ease-out'
    >
        <span
            className='size-6'
        >
            {children}
        </span>
        {isExtended && (
            <span>
                {isExtended}
            </span>
        )}
        {!isExtended && (
            <Tooltip dir={tooltip.dir}>
                {tooltip.lable}
            </Tooltip>
        )}
    </button>
  )
}
