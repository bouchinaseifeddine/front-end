import React, { useEffect } from 'react'
import { Content } from '../../../component/ContentWraper/Content'
export const SchoolContent = ({children}) => {
    return (
        <>
            <Content.title>
                المدارس
            </Content.title>
            
            {children}
        </>
    )
}
