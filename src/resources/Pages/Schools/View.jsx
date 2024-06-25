import React from 'react'
import { Table } from '../../../../../component/Tables/Table'
import { totalGrade } from '../../../../../Utiliti/data/totalGrade'
import { ModalUpp } from '../../../../../component/Modal/ModalUpp'
import { IconContained } from '../../../../../component/Buttons/iconButton'
import { ViewIcon } from 'lucide-react'
import { showModal } from '../../../../../Utiliti/dom/modal'

export const ExamView = ({ exam }) => {
  return (
    <div
      className='flex flex-col bg-light-background dark:bg-dark-background p-6 rounded-2xl overflow-auto h-2/3'
    >
      <StudentView.Head student={student} />
      <StudentView.Exams student={student} />
    </div>
  )
}


StudentView.Head = ({ student }) => {
  return (
    <div
      className='flex gap-4 items-start'
    >
      <div
      >
        <img
          src={`${import.meta.env.VITE_BACK_BASE_URL}\\storage\\${student.qrcode.path}`}
          alt={student.name}
        />
      </div>
      <div
        className='flex flex-col gap-4 items-start'
      >
        <div
          className='flex gap-2 text-title-large text-light-on-background dark:text-dark-on-background'
        >
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
              Date of birth
            </span>
            <span
              className='text-body-large'
            >
              {student.date_of_birth}
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              Address
            </span>
            <span
              className='text-body-large'
            >
              {student.address}
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              Phone
            </span>
            <span
              className='text-body-large'
            >
              {student.phone}
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

StudentView.Exams = ({ student }) => {
  return (
    <div
      className='flex flex-col gap-3 mt-8'
    >
      <h1
        className='text-title-large text-light-on-background dark:text-dark-on-background'
      >
        Exams
      </h1>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#id</Table.Th>
            <Table.Th>name</Table.Th>
            <Table.Th>coefficient</Table.Th>
            <Table.Th>Total grade</Table.Th>
            <Table.Th>View</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {
            student.exams.map(item => (
              <Table.Tr>
                <Table.Tbody.Th>{item.id}</Table.Tbody.Th>
                <Table.Td>{item.name}</Table.Td>
                <Table.Td>{item.coefficient}</Table.Td>
                <Table.Td>
                  <span
                    className={!totalGrade(item.grades).stable && 'text-light-error dark:text-dark-error'}
                  >
                    {totalGrade(item.grades).value}
                  </span>
                </Table.Td>
                <Table.Td>
                  <View exam={item} />
                </Table.Td>
              </Table.Tr>
            ))
          }
        </Table.Tbody>
      </Table>
    </div>
  )
}



const View = ({ exam }) => {
  return (
    <>
      <IconContained onClick={() => showModal('ShowStudentGrades')} tooltip={{ dir: "top", lable: "View" }}>
        <ViewIcon />
      </IconContained>
      <ModalUpp id='ShowStudentGrades'>
        <StudentGradeView exam={exam} />
      </ModalUpp>
    </>
  )
}

const StudentGradeView = ({ exam }) => {
  return (
    <div
      className='flex flex-col bg-light-background dark:bg-dark-background p-6 rounded-2xl overflow-auto'
    >
      <h1
        className='text-title-large text-light-on-background dark:text-dark-on-background'
      >
        {exam.name} : {totalGrade(exam.grades).value} / 20
      </h1>

      <div
        className='flex flex-col gap-4 mt-7'
      >
        <h1
          className='text-title-large text-light-on-surface dark:text-dark-on-surface'
        >
          Teachers notes
        </h1>
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4'
        >
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              {exam.grades[0].teacher.name} {exam.grades[0].teacher.last}
            </span>
            <span
              className='text-body-large'
            >
              {exam.grades[0].value ?? '__,__'}
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              {exam.grades[1].teacher.name} {exam.grades[1].teacher.last}
            </span>
            <span
              className='text-body-large'
            >
              {exam.grades[1].value ?? '__,__' }
            </span>
          </div>
          <div
            className='flex flex-col gap-2 items-start text-light-on-surface dark:text-dark-on-surface'
          >
            <span
              className='text-lable-large opacity-60'
            >
              {exam.grades[2].teacher.name} {exam.grades[1].teacher.last}
            </span>
            <span
              className='text-body-large'
            >
              {exam.grades[2].value ?? '__,__'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}