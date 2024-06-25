import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import { Input } from '../../../component/Form elements/InputFilled/Input';
import { Select } from '../../../component/Select/Select';
import { FilledButton } from '../../../component/Buttons/commonButtons';
import { axiosClient } from '../../../Http/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { addSchool } from '../../../StateManagment/Slices/BackEnd/SchoolsSlice';

const schema = Yup.object().shape({
});

export const Create = () => {
    const wilayas = useSelector((state) => state.Wilayas)
    const stages = useSelector((state) => state.Stages)
    const dispatch = useDispatch()
    const { register, watch, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const onSubmit = async (data) => {
        try {
            const response = await axiosClient.post('api/v1/schools', { name: data.name, max_students: data.max_student, stage_id: data.stage_id, city_id: data.city_id})
            dispatch(addSchool(response.data.data))
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-light-surface-container dark:bg-dark-surface-container rounded-xl'
            >
                <h1
                    className='text-headline-large text-light-on-surface dark:text-dark-on-surface flex justify-center my-4'
                >
                    إضافة مدرسة
                </h1>
                <div className='flex flex-col gap-3'>
                    <Input label="ألاسم" register={register('name')} error={errors.name} />
                    <Input label="قدرة الاستعاب" register={register('max_student')} error={errors.max_student} />
                    <div
                        className='flex gap-3'
                    >
                        <Select register={register('wilaya_id')} label="الولاية">
                            <Select.Option  >الولاية</Select.Option>
                            {wilayas?.map(item => (
                                <Select.Option key={item.id} value={item.id}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                        {
                            !isNaN(watch('wilaya_id')) && (
                                <Select register={register('city_id')} label="البلدية">
                                    <Select.Option >البلدية</Select.Option>
                                    {wilayas?.find(item => item.id === parseInt(watch('wilaya_id')))?.cities?.map(city => (
                                        <Select.Option key={city.id} value={city.id}>
                                            {city.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            )
                        }
                        <Select register={register('stage_id')} label="الطور">
                            <Select.Option  >الطور</Select.Option>
                            {stages?.map(item => (
                                <Select.Option key={item.id} value={item.id}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className='my-4 flex justify-end gap-4'>
                    <FilledButton type='submit'>اضافة</FilledButton>
                </div>
            </form>
        </div>
    );
};

