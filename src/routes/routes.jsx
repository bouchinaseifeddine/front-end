import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MainContent } from '../resources/ContentWrapper/Content'
import { Welcom } from '../resources/Welcom/Welcom'

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route path='/' element={<MainContent />}>
                <Route index element={<Welcom />} />
            </Route>
        </>
    )
)