import { nanoid } from 'nanoid'
import React from 'react'

export const Checkbox = ({ label, register, error, id = nanoid() }) => {
    return (
        <label
            className='flex flex-col gap-2'
            htmlFor={id}
        >
            <div
                className='flex  gap-2 '
            >
                <input
                    type="checkbox"
                    id={id}
                />
                <span
                    className='text-lable-large text-light-on-surface dark:text-dark-on-surface'
                >
                    {label}
                </span>
            </div>
            {error && (
                <span
                    className="text-body-samll text-light-error dark:text-dark-error"
                >
                    {error?.message}
                </span>
            )
            }
        </label>
    )
}
