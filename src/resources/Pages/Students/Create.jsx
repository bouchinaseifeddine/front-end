import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import { Input } from '../../../component/Form elements/InputFilled/Input';
import { Select } from '../../../component/Select/Select';
import { FilledButton } from '../../../component/Buttons/commonButtons';
import { axiosClient } from '../../../Http/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../../../StateManagment/Slices/BackEnd/StudentsSlice';

const schema = Yup.object().shape({
});

export const Create = () => {
    const stages = useSelector((state)=>state.Stages)
    const wilayas = useSelector((state)=>state.Wilayas)
    const dispatch = useDispatch()
    const { register, handleSubmit, watch , formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const onSubmit = async (data) => {
        try {
            const response = await axiosClient.post('api/v1/students', { name: data.name, last: data.last, gender : data.gender, city_id: data.city_id, year_id: data.year_id, dateOfBirth: `${data.year}-${data.month}-${data.day}` })
            console.log(response.data.data)
            dispatch(addStudent(response.data.data))
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
                    Create Student
                </h1>
                <div className='flex flex-col gap-3'>
                    <Input label="Name" register={register('name')} error={errors.name} />
                    <Input label="Last" register={register('last')} error={errors.last} />
                    <div
                        className='flex gap-3'
                    >
                        <Select register={register('month')} label="Month">
                            <Select.Option  >Month</Select.Option>
                            {monthOptions}
                        </Select>
                        <Select register={register('day')} label="Day">
                            <Select.Option  >Day</Select.Option>
                            {dayOptions}
                        </Select>
                        <Select register={register('year')} label="Year">
                            <Select.Option  >Year</Select.Option>
                            {yearOptions}
                        </Select>
                    </div>
                    <Select register={register('gender')} label="Month">
                        <Select.Option  >gender</Select.Option>
                        <Select.Option value={"male"} >male</Select.Option>
                        <Select.Option value={"female"}  >female</Select.Option>
                    </Select>
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
                    </div>
                    <div
                        className='flex gap-3'
                    >
                        <Select register={register('stage_id')} label="الطور">
                            <Select.Option  >الطور</Select.Option>
                            {stages?.map(item => (
                                <Select.Option key={item.id} value={item.id}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                        {
                            !isNaN(watch('stage_id')) && (
                                <Select register={register('year_id')} label="السنة">
                                    <Select.Option >السنة</Select.Option>
                                    {stages?.find(item => item.id === parseInt(watch('stage_id')))?.years?.map(year => (
                                        <Select.Option key={year.id} value={year.id}>
                                            {year.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            )
                        }
                    </div>
                </div>
                <div className='my-4 flex justify-end gap-4'>
                    <FilledButton type='submit'>Submit</FilledButton>
                </div>
            </form>
        </div>
    );
};

const monthOptions = [];

for (let i = 1; i <= 12; i++) {
    const month = String(i).padStart(2, '0');
    monthOptions.push(
        <Select.Option key={month} value={month}>
            {month}
        </Select.Option>
    );
}

const dayOptions = [];
for (let i = 1; i <= 31; i++) {
    const day = String(i).padStart(2, '0');
    dayOptions.push(
        <Select.Option key={day} value={day}>
            {day}
        </Select.Option>
    );
}

const yearOptions = [];
for (let i = 2024; i >= 2000; i--) {
    yearOptions.push(
        <Select.Option key={i} value={i}>
            {i}
        </Select.Option>
    );
}