import React from 'react'
import { NSD } from '../../../component/Navigations/NavigationModelDrower/NvaigationUp'

export const StudentView = ({ student }) => {
  return (
    <div
      className='flex flex-col bg-light-background dark:bg-dark-background p-6 rounded-2xl overflow-auto h-2/3'
    >
      <StudentView.Head student={student} />
    </div>
  )
}


StudentView.Head = ({ student }) => {
  return (
    <div
      className='flex gap-4 items-start'
    >
      {/* <div
      >
        <img
          src={`${import.meta.env.VITE_BACK_BASE_URL}\\storage\\${student.qrcode.path}`}
          alt={student.name}
        />
      </div> */}
      <div
        className='flex flex-col gap-4 items-start'
      >

        <div
          className='flex gap-2 text-title-large text-light-on-background dark:text-dark-on-background'
        >
          <h1
            className='text-title-medium '
          >
            معلومات شخصية
          </h1>
          <span>
            {student.name}
          </span>
          <span>
            {student.last}
          </span>
        </div>
        <div
          className='grid grid-cols-1 md:grid-cols-2 gap-2'
        >
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              تاريخ الميلاد
            </span>
            <span
              className='text-body-large'
            >
              {student.dateOfBirth}
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              الاقامة
            </span>
            <span
              className='text-body-large'
            >
              {student.city.wilaya.name} - {student.city.name}
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              الطور
            </span>
            <span
              className='text-body-large'
            >
              {student.year.name} - {student.year.stage.name}
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              المدرسة
            </span>
            <span
              className='text-body-large'
            >
              {student?.school?.name} - {student?.school?.city?.wilaya?.name}  - {student?.school?.city?.name}
            </span>

          </div>
          {
            student?.feature ? (
              <>
                <div
                  className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
                >
                  <span
                    className='text-lable-large opacity-60'
                  >
                    الطول
                  </span>
                  <span
                    className='text-body-large'
                  >
                    {student?.feature?.tall} cm
                  </span>

                </div>
                <div
                  className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
                >
                  <span
                    className='text-lable-large opacity-60'
                  >
                    الوزن
                  </span>
                  <span
                    className='text-body-large'
                  >
                    {student?.feature?.weight} kg
                  </span>

                </div>
		<div
                  className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
                >
                  <span
                    className='text-lable-large opacity-60'
                  >
                    الجنس
                  </span>
                  <span
                    className='text-body-large'
                  >
                    {student?.gender} 
                  </span>

                </div>
                {student?.gender == "female" && (
                  <div
                    className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
                  >
                    <span
                      className='text-lable-large opacity-60'
                    >
                      المضهر
                    </span>
                    <span
                      className='text-body-large'
                    >
                      {student?.feature?.veiled == "no" ? "دون حجاب" : student?.feature?.full_veiled == "no" ? "محجبة دون نقاب" : "محجبة بنقاب"}
                    </span>
                  </div>
                )
                }
              </>
            ) : (
              <div
                className='flex items-center text-body-large w-full text-yellow-600 dark:text-yellow-400 mt-6'
              >
                لم توجد بيانات حول المضهر لحد الان
              </div>
            )
          }



        </div>
      </div>
      <div></div>
    </div>
  )
}
