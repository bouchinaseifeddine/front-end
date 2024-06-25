import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Edit2Icon, Trash, UserPlus2, View } from 'lucide-react'
import { Content } from '../../../component/ContentWraper/Content'
import { Table } from '../../../component/Tables/Table'
import { IconContained } from '../../../component/Buttons/iconButton'
import { showModal } from '../../../Utiliti/dom/modal'
import { Modal } from '../../../component/Modal/Modal'
import { axiosClient } from '../../../Http/axiosClient'
import { setWilayas } from '../../../StateManagment/Slices/BackEnd/WilayasSlice'
import { setStages } from '../../../StateManagment/Slices/BackEnd/StagesSlice'
import { deleteProfile, setProfiles } from '../../../StateManagment/Slices/BackEnd/StudentsSlice'
import { Create } from './Create'
import { StudentEdit } from './Edit'
import { StudentView } from './View'

export const StudentsIndex = () => {
  const students = useSelector(state => state.Students)
  const dispatch = useDispatch()
  const getStudents = async () => {
    try {
      const response = await axiosClient("api/v1/students")
      dispatch(setProfiles(response.data.data))
      console.log((response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
  const getWilayas = async () => {
    try {
      const response = await axiosClient("api/v1/wilayas")
      dispatch(setWilayas(response.data.data))
      console.log((response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
  const getStages = async () => {
    try {
      const response = await axiosClient("api/v1/stages")
      dispatch(setStages(response.data.data))
      console.log((response.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStudents()
    getWilayas()
    getStages()
  }, [])
  return (
    <>
      <div
        className='flex flex-col gap-4 mt-4'
      >
        <Content.MainAct icon={<UserPlus2 />} onClick={() => { showModal("CreateStudents") }} >
          إضافة طالب
        </Content.MainAct>

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>رقم</Table.Th>
              <Table.Th>الرمز</Table.Th>
              <Table.Th>الاسم</Table.Th>
              <Table.Th>القب</Table.Th>
              <Table.Th>الطور</Table.Th>
              <Table.Th>السنة</Table.Th>
              <Table.Th>الولاية</Table.Th>
              <Table.Th>المدينة</Table.Th>
              <Table.Th>تاريخ الاضافة</Table.Th>
              <Table.Th>تاريخ التعديل</Table.Th>
              <Table.Th>الاعدادات</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {
              students.map(item =>
                <Table.Tr key={item.id}>
                  <Table.Tbody.Th>
                    {item.id}
                  </Table.Tbody.Th>
                  <Table.Tbody.Th>
                    {item.key.value}
                  </Table.Tbody.Th>
                  <Table.Td>
                    {item.name}
                  </Table.Td>
                  <Table.Td>
                    {item.last}
                  </Table.Td>
                  <Table.Td>
                    {item?.year?.stage?.name}
                  </Table.Td>
                  <Table.Td>
                    {item?.year?.name}
                  </Table.Td>
                  <Table.Td>
                    {item?.city?.wilaya?.name}
                  </Table.Td>
                  <Table.Td>
                    {item?.city?.name}
                  </Table.Td>
                  <Table.Td>
                    {item.created_at}
                  </Table.Td>
                  <Table.Td>
                    {item.updated_at}
                  </Table.Td>
                  <Table.Td>
                    <Settings>
                      <ViewStudent student={item} />
                      <Edit student={item} />
                      <Delete student={item} />
                    </Settings>
                  </Table.Td>
                </Table.Tr>
              )
            }
          </Table.Tbody>
        </Table>
      </div>
      <Modal id='CreateStudents'>
        <Create />
      </Modal>
    </>
  )
}

const Settings = ({ children }) => {
  return (
    <div
      className='flex gap-1 items-center justify-center '
    >
      {children}
    </div>
  )
}

const ViewStudent = ({ student }) => {
  return (
    <>
      <IconContained onClick={() => showModal(`StudentViwe${student.id}`)} tooltip={{ dir: "top", lable: "Edite" }}>
        <View />
      </IconContained>
      <Modal id={`StudentViwe${student.id}`}>
        <StudentView student={student} />
      </Modal>
    </>

  )
}

const Edit = ({ student }) => {
  return (
    <>
      <IconContained onClick={() => showModal(`StudentEdit${student.id}`)} tooltip={{ dir: "top", lable: "Edite" }}>
        <Edit2Icon />
      </IconContained>
      <Modal id={`StudentEdit${student.id}`}>
        <StudentEdit student={student} />
      </Modal>
    </>
  )
}

const Delete = ({ student }) => {
  const dispatch = useDispatch()
  const deleteItem = async () => {
    try {

      const response = await axiosClient.delete(`api/v1/students/${student.id}`)
      dispatch(deleteProfile(student.id))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <IconContained onClick={deleteItem} tooltip={{ dir: "top", lable: "Delete" }}>
        <Trash />
      </IconContained>
    </>
  )
}