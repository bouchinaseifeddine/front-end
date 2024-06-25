import React from 'react'
import { FilledButton } from '../../component/Buttons/commonButtons'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { axiosClient } from '../../Http/axiosClient'

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    key: Yup.string().required('Key is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

export const Register = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        try {
            let response = await axiosClient.post('/api/v1/register', { email: data.email, password: data.password, key: data.key })
            localStorage.setItem("ACCESS_TOKEN" ,response.data.token)
            dispatch(setToken(response.data.token))
        } catch (response) {
            console.log(response)
        }
    }
    return (
        <div
            className='row-start-5 row-span-5 md:w-[80%] md:mx-auto lg:w-[95%]lg:col-start-7 lg:col-span-5 lg:row-start-3 lg:row-span-6 p-6 lg:rounded-lg lg:border bg-light-surface-container-high dark:bg-dark-surface-container-high  border-light-outline-variant/50 dark:border-dark-outline-variant/50 shadow-sm'
        >
            <Register.Title>
                انشاء حساب
            </Register.Title>
            {
                errors.root && (
                    <div
                        className='flex py-2 px-4 text-light-error dark:text-dark-error text-body-large'
                    >
                        {errors.root.message}
                    </div>
                )
            }
            <Register.Form onSubmit={handleSubmit(onSubmit)}>
                <Register.Input data={'email'} label="البريد الاكتروني" register={register} error={errors.email} placeholder="name@somthing.com" />
                <Register.Input data={'password'} label="كلمة المرور" register={register} error={errors.password} placeholder="أدخل كلمة المرور" />
                <Register.Input data={'confirmPassword'} label="تأكيد كلمة المرور" register={register} error={errors.confirmPassword} placeholder="تأكيد كلمة المرور" />
                <Register.Input data={'key'} register={register} label="الرمز" error={errors.key} placeholder="ادخل رمز" />
                <FilledButton type='submit'>
                    إنشاء
                </FilledButton>
            </Register.Form>

        </div>
    )
}

Register.Title = ({ children }) => {
    return (
        <h1
            className='text-headline-small font-semibold w-fit mx-auto mb-3 
                text-light-on-surface-variant
                dark:text-dark-on-surface-variant'
        >
            {children}
        </h1>
    )
}

Register.Form = ({ children, onSubmit }) => {
    return (
        <form className="w-95% mx-auto" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Register.Input = ({ label, error, register, data, placeholder = "" }) => {
    return (
        <div className="mb-5">
            <label
                htmlFor={label}
                className={!error ? "block mb-2 text-lable-medium text-light-on-surface dark:text-dark-on-surface "
                    : "block mb-2 text-lable-medium text-light-error dark:text-dark-error "
                }
            >
                {label}
            </label>
            <input
                {...register(data)}
                type="text"
                id={label}
                className={!error ? "px-4 mb-2 h-14 flex items-center bg-inherit  border border-light-outline dark:border-dark-outline focus:border-2 focus:border-light-primary dark:focus:border-dark-primary text-light-on-surface dark:text-dark-on-surface placeholder:text-light-on-surface-variant dark:placeholder:text-dark-on-surface-variant  text-body-large rounded-lg focus:outline-none   w-full "
                    : "px-4 mb-2 h-14 flex items-center bg-inherit  border border-light-error dark:border-dark-error focus:border-2  text-light-error dark:text-dark-error placeholder:text-light-on-surface-variant dark:placeholder:text-dark-on-surface-variant  text-body-large rounded-lg  focus:outline-none  w-full "
                }
                placeholder={placeholder}
            />
            {error && (
                <span
                    className='text-body-samll text-light-error dark:text-dark-error'
                >
                    {error?.message}
                </span>
            )}
        </div>
    )
}