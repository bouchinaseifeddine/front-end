import React, { useEffect } from 'react'
import { Content } from '../../../component/ContentWraper/Content'
export const StudentContent = ({children}) => {
    return (
        <>
            <Content.title>
                طلاب
            </Content.title>
            
            {children}
        </>
    )
}
