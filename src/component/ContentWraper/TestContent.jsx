import React from 'react'
import { Content } from './Content'
import { NSD } from '../Navigations/NavigationModelDrower/NvaigationUp'
import { useDispatch, useSelector } from 'react-redux'
import { Filter, Menu, Moon } from 'lucide-react'
import { IconStandard } from '../Buttons/iconButton'
import { toggleNav } from '../../StateManagment/Slices/Dom/NavigationSlice'
import { Filter as Filt } from './Filter'
import { showModal } from '../../Utiliti/dom/modal'
import { FilledButton } from '../Buttons/commonButtons'
import { Table } from '../Tables/Table'
export const TestContent = () => {
    const nav = useSelector(state => state.Navigation)
    const dispatch = useDispatch()

    const onClick = () => {
        document.documentElement.classList.toggle('dark')
    }
    const onClickMenu1 = () => {
        dispatch(toggleNav())
    }

    const onClickMenu2 = () => {
        const navigation = document.getElementById('NavigationDrower')
        if (nav === false) {
            dispatch(toggleNav())
        }
        navigation.classList.remove("max-lg:invisible")
    }
    return (
        <>
            <div
                className='fixed bottom-4 right-4 flex flex-col gap-4'
            >
                <div>
                    <IconStandard
                        onClick={onClick}
                    >
                        <Moon />
                    </IconStandard>
                </div>

                <div className='lg:hidden'>
                    <IconStandard
                        onClick={onClickMenu2}
                    >
                        <Menu />
                    </IconStandard>
                </div>
                <div className='max-lg:hidden'>
                    <IconStandard
                        onClick={onClickMenu1}
                    >
                        <Menu />
                    </IconStandard>
                </div>

            </div>

          
        </>
    )
}
