import { createSlice } from "@reduxjs/toolkit";



const NavigationSlice = createSlice({
    name : 'Navigation' ,
    initialState : true , 
    reducers : {
        toggleNav : (state)=> !state
    }
})

export default NavigationSlice.reducer ; 
export const {toggleNav} = NavigationSlice.actions ;