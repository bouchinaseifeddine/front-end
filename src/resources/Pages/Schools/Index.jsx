import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Edit2Icon, Trash, UserPlus2, } from 'lucide-react'
import { Content } from '../../../component/ContentWraper/Content'
import { Table } from '../../../component/Tables/Table'
import { IconContained } from '../../../component/Buttons/iconButton'
import { showModal } from '../../../Utiliti/dom/modal'
import { Modal } from '../../../component/Modal/Modal'
import { Create } from './Create'
import { axiosClient } from '../../../Http/axiosClient'
import { deleteSchool, setSchools } from '../../../StateManagment/Slices/BackEnd/SchoolsSlice'
import { setWilayas } from '../../../StateManagment/Slices/BackEnd/WilayasSlice'
import { setStages } from '../../../StateManagment/Slices/BackEnd/StagesSlice'
import { SchoolEdit } from './Edit'

export const SchoolsIndex = () => {
  const schools = useSelector(state => state.Schools)
  const dispatch = useDispatch()
  const getSchools = async () => {
    try {
      const response = await axiosClient("api/v1/schools")
      dispatch(setSchools(response.data.data))
      console.log((response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
  const getCities = async () => {
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
    getSchools()
    getCities()
    getStages()
  }, [])
  return (
    <>
      <div
        className='flex flex-col gap-4 mt-4'
      >
        <Content.MainAct icon={<UserPlus2 />} onClick={() => { showModal("CreateSchools") }} >
          إضافة مدرسة
        </Content.MainAct>

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>رقم</Table.Th>
              <Table.Th>الرمز</Table.Th>
              <Table.Th>الاسم</Table.Th>
              <Table.Th>قوة الاستعاب</Table.Th>
              <Table.Th>الطور</Table.Th>
              <Table.Th>الولاية</Table.Th>
              <Table.Th>المدينة</Table.Th>
              <Table.Th>تاريخ الاضافة</Table.Th>
              <Table.Th>تاريخ التعديل</Table.Th>
              <Table.Th>الاعدادات</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {
              schools.map(item =>
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
                    {item.max_students}
                  </Table.Td>
                  <Table.Td>
                    {item?.stage?.name}
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
                      <Edit school={item} />
                      <Delete school={item}/>
                    </Settings>
                  </Table.Td>
                </Table.Tr>
              )
            }
          </Table.Tbody>
        </Table>
      </div>
      <Modal id='CreateSchools'>
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


const Edit = ({school}) => {
  return (
    <>
      <IconContained onClick={() => showModal(`SchoolEdit${school.id}`)} tooltip={{ dir: "top", lable: "Edite" }}>
        <Edit2Icon />
      </IconContained>
      <Modal id={`SchoolEdit${school.id}`}>
        <SchoolEdit  school={school}/>
      </Modal>
    </>
  )
}

const Delete = ({school}) => {
  const dispatch = useDispatch()
  const deleteItem =  async()=>{
    try {
     
      const response = await axiosClient.delete(`api/v1/schools/${school.id}`)
      dispatch(deleteSchool(school.id))
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