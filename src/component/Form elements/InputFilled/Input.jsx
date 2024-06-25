import { nanoid } from 'nanoid'
import React from 'react'

export const Input = ({ label ="lable", register, error , id = nanoid() }) => {
  return (
    <div
      className='group'
    >
      <label
        htmlFor={id}
        className={
          error ? `group relative h-14 py-1 ps-4 flex items-center border   border-light-error dark:border-dark-error   has-[:focus]:border-2 rounded-md  transition-colors duration-150 ease-in`
          :`group relative h-14 py-1 ps-4 flex items-center border border-light-outline dark:border-dark-outline has-[:focus]:border-2  has-[:focus]:border-light-primary has-[:focus]:dark:border-dark-primary has-[:invalid]:border-4 rounded-md transition-colors duration-150 ease-in`
        }
      >
        <span
          className={
            error ?'capitalize absolute start-2 top-0 -translate-y-1/2 px-1 text-lable-small  bg-light-surface dark:bg-dark-surface text-light-error dark:text-dark-error'
            :'capitalize absolute start-2 top-0 -translate-y-1/2 px-1 text-lable-small  bg-light-surface dark:bg-dark-surface text-light-on-surface-variant dark:text-dark-on-surface-variant'
          }
        >
          {label}
        </span>
        <input
          {...register}
          aria-invalid={error}
          id={id}
          className={
            error ?'py-1 flex-1 text-body-large bg-transparent text-light-error dark:text-dark-error focus:outline-none '
            :'py-1 flex-1 text-body-large bg-transparent text-light-on-surface dark:text-dark-on-surface focus:outline-none '
          }
          type="text"
        />
      </label>
      {
        error && (
          <span
            className='capitalize text-body-samll text-light-error dark:text-dark-error '
          >
            { error?.message }
          </span>
        )
      }

    </div>

  )
}
