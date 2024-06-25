import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Input } from  '../../../component/Form elements/InputFilled/Input'
import { Select } from '../../../component/Select/Select'
import { FilledButton } from '../../../component/Buttons/commonButtons'; 
import { axiosClient } from '../../../Http/axiosClient'; 
import { useDispatch, useSelector } from 'react-redux';
import { editSchool } from '../../../StateManagment/Slices/BackEnd/SchoolsSlice';



export const SchoolEdit = ({ school }) => {
    const wilayas = useSelector((state) => state.Wilayas)
    const stages = useSelector((state) => state.Stages)
    const dispatch = useDispatch()
    const { register, watch ,handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues :{
                name: school.name, 
                max_student: school.max_students, 
                stage_id: school.stage_id,
                city_id: school.city_id, 
            }
        }
    );

    const onSubmit = async (data) => {
        try {
            const response = await axiosClient.put(`api/v1/schools/${school.id}`, { name: data.name, max_students: data.max_student, stage_id: data.stage_id, city_id: data.city_id })
            dispatch(editSchool(response.data.data))
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        console.log(watch('wilaya_id'))
    },[watch])

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-light-surface-container dark:bg-dark-surface-container rounded-xl'
            >
                <h1
                    className='text-headline-large text-light-on-surface dark:text-dark-on-surface flex justify-center my-4'
                >
                    تعديل مدرسة
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
                            watch('wilaya_id') && (
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
