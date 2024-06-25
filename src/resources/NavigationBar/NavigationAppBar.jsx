import React from 'react'
import { NAB } from '../../component/Navigations/NavigationAppBar/NavigationAppBar'

export const NavigationAppBar = () => {
    return (
        <NAB>
            <NAB.First/>
            <NAB.Second>
                <NAB.Mode/>
            </NAB.Second>
        </NAB>
    )
}
