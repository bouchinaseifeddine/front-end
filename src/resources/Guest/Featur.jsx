import React from 'react'
import { useForm } from 'react-hook-form'
import { FilledButton, TextButton } from '../../component/Buttons/commonButtons'
import { showModal } from '../../Utiliti/dom/modal'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { axiosClient } from '../../Http/axiosClient'
import { useDispatch } from 'react-redux'
import { setToken } from '../../StateManagment/Slices/BackEnd/CurentUserSlice'
import { Select } from '../../component/Select/Select'
import { Check } from 'lucide-react'
const schema = Yup.object({
    tall: Yup.number().positive('الطول يجب ان يكون عدد موجب').required('يرجى ادخالطول'),
    weight: Yup.number().positive('الوزن يجب ان يكون موجب').required('يرجى ادخال وزنك'),
    key: Yup.string().required('يرجى ادخال رمز السري'),
})
export const Featurs = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, setError, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        try {
            let response = await axiosClient.post('/api/v1/feature', { key: data.key, tall: data.tall, weight: data.weight, veiled: data.veiled, full_veiled: data.full_veiled })
        } catch (error) {
            setError('key' , "الرقم السري غير صالح")
        }
    }

    return (
        <div
            className='row-start-5 row-span-5  md:mx-auto  lg:col-span-5 lg:row-start-3 lg:row-span-6 p-6 lg:rounded-lg lg:border lg:bg-light-surface-container-high lg:dark:bg-dark-surface-container-high  lg:border-light-outline-variant/50 lg:dark:border-dark-outline-variant/50 lg:shadow-sm'
        >
            <Featurs.Title>
                سجل بيانات التلميذ
            </Featurs.Title>
            <Featurs.Form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className='flex gap-2 justify-between'
                >
                    <Featurs.Input label={' الطول'} data={'tall'} register={register} error={errors.tall} placeholder="ادخال الطول بوحدة سم" />
                    <Featurs.Input label={' الوزن'} data={'weight'} register={register} error={errors.weight} placeholder=" ادخال الوزن بوحدة كغ " />
                </div>
                <div
                    className='flex gap-2 justify-between'
                >
                    <Select register={register('veiled')} label="محجبة ؟">
                        <Select.Option >اختر</Select.Option>
                        <Select.Option value={"yes"} >نعم</Select.Option>
                        <Select.Option value={"no"} >لا</Select.Option>
                    </Select>
                    {
                        watch("veiled") == "yes" && (
                            <Select register={register('full_veiled')} label="منقبة ؟">
                                <Select.Option >اختر</Select.Option>
                                <Select.Option value={"yes"} >نعم</Select.Option>
                                <Select.Option value={"no"} >لا</Select.Option>
                            </Select>
                        )
                    }
                </div>
                <Featurs.Input label={' الرمز السري'} data={'key'} register={register} error={errors.key} placeholder=" ادخل الرمز السري" />

                {isSubmitting ? (
                    <button type="button" className="h-10 w-fit px-6 rounded-full flex items-center text-lable-large text-light-on-primary dark:text-dark-on-primary bg-light-primary dark:bg-dark-primary hover:opacity-70 transition-colors duration-200 ease-out" disabled="">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        قيد التنفيذ
                    </button>
                ) : (
                    <FilledButton type='submit'>
                        تسجيل
                    </FilledButton>
                )
                }

                {
                    isSubmitSuccessful && (
                        <div
                            className='flex gap-3 items-center text-green-600 dark:text-green-400 text-body-large'
                        >
                            <span>
                                <Check />
                            </span>
                            <span>
                                تمت العملية بنجاح
                            </span>
                        </div>
                    )
                }
            </Featurs.Form>

        </div>
    )
}

Featurs.Title = ({ children }) => {
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

Featurs.Form = ({ children, onSubmit }) => {
    return (
        <form className="w-95% mx-auto" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Featurs.Input = ({ label, error, register, data, placeholder = "" }) => {
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