import { createSlice } from "@reduxjs/toolkit";



const SchoolsSlice = createSlice({
    name : "Schools",
    initialState: [],
    reducers:{
        setSchools : (state , action)=>{
            return action.payload
        },
        addSchool : (state , action)=>{
            state.unshift(action.payload)              
        },
        addSchools : (state , action)=>{
            return state.unshift(action.payload)              
        },
        deleteSchool : (state ,action)=>{
            return state.filter((item)=> item.id != action.payload)
        },
        editSchool : (state , action)=>{
            return state.map((item)=> item.id == action.payload.id ? action.payload : item )
        }
    }
})

export default SchoolsSlice.reducer ;

export const { setSchools, addSchool, addSchools, deleteSchool, editSchool } = SchoolsSlice.actions; 