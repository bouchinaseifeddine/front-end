import { createSlice } from "@reduxjs/toolkit";



const CitiesSlice = createSlice({
    name : "Cities",
    initialState: [],
    reducers:{
        setCities : (state , action)=>{
            return action.payload
        },
        addCity : (state , action)=>{
            state.unshift(action.payload)              
        },
        addCities : (state , action)=>{
            return state.unshift(action.payload)              
        },
        deleteCity : (state ,action)=>{
            return state.filter((item)=> item.id != action.payload)
        },
        editCity : (state , action)=>{
            return state.map((item)=> item.id == action.payload.id ? action.payload : item )
        }
    }
})

export default CitiesSlice.reducer ;

export const { setCities, addCity, addCities, deleteCity, editCity } = TeachersSlice.actions; 