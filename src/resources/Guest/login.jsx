import React from 'react'
import { useForm } from 'react-hook-form'
import { FilledButton, TextButton } from '../../component/Buttons/commonButtons'
import { showModal } from '../../Utiliti/dom/modal'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { axiosClient } from '../../Http/axiosClient'
import { useDispatch } from 'react-redux'
import { setToken, setUser } from '../../StateManagment/Slices/BackEnd/CurentUserSlice'
const schema = Yup.object({
    'email' : Yup.string().email('بريد الالكتروني غير صالح').required('البريد الالكتروني ضروري'),
    'password' : Yup.string().min(8,"كلمة المرور على الاقل من 8 احرف").required('كلمة السر ضرورية'),
})
export const Login = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({resolver : yupResolver(schema)})

    const onSubmit = async (data) => {
        try {
            let response = await axiosClient.post('/api/v1/login' , {email : data.email , password : data.password}) 
            localStorage.setItem("ACCESS_TOKEN" ,response.data.token)
            dispatch(setToken(response.data.token))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className='row-start-5 row-span-5 md:w-[80%] md:mx-auto lg:w-[95%]lg:col-start-7 lg:col-span-5 lg:row-start-3 lg:row-span-6 p-6 lg:rounded-lg lg:border lg:bg-light-surface-container-high lg:dark:bg-dark-surface-container-high  lg:border-light-outline-variant/50 lg:dark:border-dark-outline-variant/50 lg:shadow-sm'
        >
            <Login.Title>
                سجل الدخول
            </Login.Title>
            <Login.Form onSubmit={handleSubmit(onSubmit)}>
                <Login.Input label={'البريد الالكتروني'} data={'email'} register={register} error={errors.email} placeholder="name@somthing.com" />
                <Login.Input label={'كلمة المرور'} data={'password'} register={register} error={errors.password} placeholder="ادخل كلمة السر" />
                <FilledButton type='submit'>
                    دخول
                </FilledButton>
                <div className='flex justify-between mt-4'>
                    <TextButton onClick={() => { showModal("forgetPasswordModal") }}>نسيان كلمة السر</TextButton>
                    <TextButton onClick={() => { showModal("createAccountModal") }}>انشاء حساب جديد</TextButton>
                </div>
            </Login.Form>

        </div>
    )
}

Login.Title = ({ children }) => {
    return (
        <h1
            className='text-headline-small font-semibold w-fit mx-auto mb-3 
                text-light-on-surface-variant
                dark:text-dark-on-surface-variant
                '
        >
            {children}
        </h1>
    )
}

Login.Form = ({ children, onSubmit }) => {
    return (
        <form className="w-95% mx-auto" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Login.Input = ({ label, error, register, data, placeholder = "" }) => {
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