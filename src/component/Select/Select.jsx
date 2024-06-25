import React from 'react'

export const Select = ({ children , register , label }) => {
    return (
        <div className="max-w-sm mx-auto">
              <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select
                id={label}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register}
            >
                {children}
            </select>
        </div>
    )
}


Select.Option = ({ children, value  }) => {
    return value ? <option value={value} >{children}</option> : <option>{children}</option>
}