import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Guest } from '../Guest/guest'
import { SchoolContent } from '../Pages/Schools/Content'
import { SchoolsIndex } from '../Pages/Schools/Index'
import { StudentContent } from '../Pages/Students/Content'
import { StudentsIndex } from '../Pages/Students/Index'

export const Welcom = () => {
    const { user, userType } = useSelector(state => state.CurentUser)
    const isAuth = useSelector((state) => state.CurentUser.token)
    console.log(isAuth)
    return isAuth !== "" ? (
        userType === "admin" ? (
            <>
                <SchoolContent>
                    <SchoolsIndex />
                </SchoolContent>
            </>
        ) : (
            <>
                <StudentContent>
                    <StudentsIndex />
                </StudentContent>
            </>
        )
    ) : (
        <Guest />
    )

}
