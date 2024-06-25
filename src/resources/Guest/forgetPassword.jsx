import React from 'react'
import { FilledButton } from '../../component/Buttons/commonButtons'

export const ForgetPassword = () => {
    return (
        <div
            className=' bg-light-surface-container-high dark:bg-dark-surface-container-high w-11/12  md:w-1/2 lg:w-1/3  md:mx-auto p-6 rounded-lg border  border-light-outline-variant/50 dark:border-dark-outline-variant/50 shadow-sm
                    '
        >
            <h1
                className='text-headline-small font-semibold w-fit mx-auto mb-3  text-light-on-surface-variant dark:text-dark-on-surface-variant
                        '
            >
                Reset your password
            </h1>
            <form className="w-95% mx-auto">
                <div className="mb-5">
                    <label htmlFor="ForgetPasswordEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="ForgetPasswordEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@somthing.com" />
                </div>
                <FilledButton type='submit'>
                    Submit
                </FilledButton>
            </form>
        </div>
    )
}
