import { createSlice } from "@reduxjs/toolkit";



const StudentFeaturSlice = createSlice({
    name : "StudentFeatur",
    initialState: [],
    reducers:{
        setProfiles : (state , action)=>{
            return  action.payload
        },
        addProfile : (state , action)=>{
            return  state.unshift(action.payload)              
        },
        addProfiles : (state , action)=>{
            return  state.unshift(...action.payload)              
        },
        deleteProfile : (state ,action)=>{
            return  state.filter((item)=> item.id != action.payload)
        },
        editProfle : (state , action)=>{
            return  state.map((item)=> item.id == action.payload.id ? action.payload.data : item )
        }
    }
})

export default StudentFeaturSlice.reducer ;

export const { setProfiles, addProfile, addProfiles, deleteProfile, editProfle } = StudentFeaturSlice.actions; 