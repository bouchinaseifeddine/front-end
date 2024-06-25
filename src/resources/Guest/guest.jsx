import React, { useEffect } from 'react'
import { Login } from './login'
import { Register } from './register'
import { ForgetPassword } from './forgetPassword'
import { Modal } from '../../component/Modal/Modal'
import { OutlineButton } from '../../component/Buttons/commonButtons'
import { showModal } from '../../Utiliti/dom/modal'
import { Featurs } from './Featur'

export const Guest = () => {
    return (
        <>
            <div
                className='h-screen grid grid-cols-1 grid-rows-12  justify-center px-4 lg:grid-cols-12 bg-light-background dark:bg-dark-background
                '
            >
                <div
                    className='row-start-2 row-span-2   md:w-[80%] md:mx-auto  lg:w-[95%]   lg:col-start-2 lg:col-span-5  lg:row-start-5 lg:row-span-3  '
                >
                    <h1
                        className='text-display-medium md:text-display-large mb-4 text-light-primary dark:text-dark-primary'
                    >تحسين</h1>
                    <p
                        className='text-body-medium  relative before:absolute before:w-3 before:inset-y-0 before:-left-6 text-light-on-surface dark:text-dark-on-surface before:bg-light-primary  before:dark:bg-dark-primary ml-6'
                    >
                        يهدف هذا التطبيق الى توحيد الزي المدرسي لتلاميذ من جميع الطوار تحت اشراف وزارة التربية و التعليم
                    </p>
                    <div
                        className='flex flex-col gap-3 items-start'
                    >
                        <span>يرجى ادخال البيانة الخاصة بالتلاميذ</span>
                        <OutlineButton onClick={()=>{showModal("AddFeatur")}}>
                            ادخال
                        </OutlineButton>
                    </div>
                </div>
                <Login/>
            </div>
            <Modal id='createAccountModal'>
                <Register/>
            </Modal>
            <Modal id='AddFeatur'>
                <Featurs />
            </Modal>
        </>
    )
}
