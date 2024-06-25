import React from 'react'
import { FilledButton, OutlineButton, TextButtonWithIcon } from '../Buttons/commonButtons'
import { Modal } from '../Modal/Modal'
import { FilterChips, ToggelFilterChips } from '../Chipes/FilterChips'
import { Check, X } from 'lucide-react'


export const Filter = ({ children }) => {
    return (
        <div
            className='w-full flex gap-3 items-end'
        >
            {children}
        </div>
    )
}

Filter.Btn = ({ children, onClick = () => { }, icon = <Filter /> }) => {
    return (
        <TextButtonWithIcon onClick={onClick} icon={icon} >
            {children}
        </TextButtonWithIcon>
    )
}

Filter.Chipe = ({children , id , onClick = ()=>{} , leadingIcon = <Check />, trailingIcon = <X /> })=>{
    return (
        <ToggelFilterChips id={id} onClick={onClick}  leadingIcon ={leadingIcon}  trailingIcon = {trailingIcon} >
            {children}
        </ToggelFilterChips>
    )
}

Filter.Form = ({ id, children , onSubmit = ()=>{} , onReset = ()=>{} }) => {
    return (
        <Modal id={id}>
            <form onSubmit={onSubmit} onReset={onReset}
                className='flex flex-col items-stretch gap-4 p-4 rounded-2xl bg-light-background dark:bg-dark-background '
            >
                {children}
            </form>
        </Modal>
    )
}

Filter.Title = ({ children }) => {
    return (
        <div
            className='text-headline-medium text-light-on-background dark:text-dark-on-background flex justify-center'
        >
            {children}
        </div>
    )
}

Filter.Body = ({ children, rows }) => {
    const style = `grid grid-cols-${rows} gap-3`
    return (
        <div
            className={`grid grid-cols-${rows} gap-3`}
        >
            {children}
        </div>
    )
}

Filter.Col = ({ children, title }) => {
    return (
        <div
            className='flex flex-col items-stretch gap-3'
        >
            <h1
                className='text-lable-large text-light-on-surface-variant dark:text-dark-on-surface-variant flex justify-center'
            >
                {title}
            </h1>
            {children}
        </div>
    )
}


Filter.Footer = ({  reset = "reset" , filter = "filter" }) => {

    return (
        <div
            className='mt-4 flex justify-end gap-2'
        >
            <OutlineButton type='reset'>
                {reset}
            </OutlineButton>
            <FilledButton type='submit'>
                {filter}
            </FilledButton>
        </div>
    )
}


