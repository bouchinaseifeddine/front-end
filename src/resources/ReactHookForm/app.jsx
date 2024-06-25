import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../component/Form elements/InputFilled/Input';
import { IconStandard } from '../../component/Buttons/iconButton';
import { Moon } from 'lucide-react';
import { FilledButton } from '../../component/Buttons/commonButtons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox } from '../../component/Form elements/CheckBox/Checkbox';

const schema = yup.object().shape({
  username: yup.string().required('username is required'),
  email: yup.string().email('invalid email').required('email is required'),
  licence: yup.boolean().oneOf([true],'you have to agree for the licence').required(),
});

export const RHFapp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {
      resolver : yupResolver(schema)
    }
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  const onClick = () => {
    document.documentElement.classList.toggle('dark');
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
          React Hook Form
        </h1>
        <div className='flex flex-col gap-3'>
          <Input label="Username" register={register('username')} error={errors.username} />
          <Input label="Email" register={register('email')} error={errors.email} />
          <Checkbox label="Agree ? " register={register('licence')} error={errors.licence}  />
        </div>

        <div className='my-4 flex justify-end gap-4'>
          <FilledButton type='submit'>Submit</FilledButton>
        </div>
      </form>
      <div className='fixed bottom-4 right-4 flex flex-col gap-4'>
        <div>
          <IconStandard onClick={onClick}>
            <Moon />
          </IconStandard>
        </div>
      </div>
    </div>
  );
};
