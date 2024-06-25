import { Bell, Plus } from "lucide-react"
import { Tooltip } from "../Tooltip/Tooltip"

export const IconsButtons = () => {
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
                        className="flex flex-col gap-2 "
                    > 
                        <IconStandard tooltip={{lable:"IconStandard" , dir:"right"}}></IconStandard> 
                        <IconStandard tooltip={{lable:"SelectedIconStandard" , dir:"right"}} selection={true}></IconStandard> 
                    </li>
                    <li 
                        className="flex flex-col gap-2 "
                    > 
                        <IconContained tooltip={{lable:"IconIconContained" , dir:"right"}}></IconContained> 
                        <IconContained tooltip={{lable:"SelectedIconIconContained" , dir:"right"}} selection={true}></IconContained> 
                    </li>
                </ul>
            </div>
        </>
    )
}

export const IconStandard = (
    {
        children = <Plus />,
        selection = false,
        tooltip = {lable : "Tooltip" , dir : "right"   },
        onClick = ()=>{}
    }
) => {
    return (
        <button
            onClick={onClick}
            className="group relative  size-12  flex justify-center items-center  transition-all duration-200 ease-out"
        >
            <span
                className={selection ? 'size-10 rounded-full flex justify-center items-center group-hover:opacity-70 bg-light-secondary-container dark:bg-dark-secondary-container ' : 'size-10 flex rounded-full justify-center items-center bg-light-surface-container-highest dark:bg-dark-surface-container-highest'}
            >
                <span
                    className={selection ? "text-light-on-secondary-container dark:text-dark-on-secondary-container" : "text-light-on-surface-variant dark:text-dark-on-surface-variant"}
                >
                    {children}
                </span>
            </span>
            <Tooltip dir={tooltip.dir}>{tooltip.lable}</Tooltip>
        </button>
    )
}

export const IconContained =  (
    {
        children = <Bell/>,
        selection = false,
        tooltip = {lable : "Tooltip" , dir : "right"   },
        onClick = ()=>{}
    }
) => {
    return (
        <button
            onClick={onClick}
            className="group relative  size-6  flex justify-center items-center  transition-all duration-200 ease-out"
        >
            <span
                className={
                    selection ?`text-light-on-surface dark:text-dark-on-surface `:`text-light-primary dark:text-dark-primary `
                }
            >
                {children}
            </span>
            <Tooltip dir={tooltip.dir}>{tooltip.lable}</Tooltip>
        </button>
    )
}