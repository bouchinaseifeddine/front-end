import { createSlice } from "@reduxjs/toolkit";



const WilayasSlice = createSlice({
    name : "Wilayas",
    initialState: [],
    reducers:{
        setWilayas : (state , action)=>{
            return action.payload
        },
        addWilaya : (state , action)=>{
            state.unshift(action.payload)              
        },
        addWilayas : (state , action)=>{
            return state.unshift(action.payload)              
        },
        deleteWilaya : (state ,action)=>{
            return state.filter((item)=> item.id != action.payload)
        },
        editWilaya : (state , action)=>{
            return state.map((item)=> item.id == action.payload.id ? action.payload : item )
        }
    }
})

export default WilayasSlice.reducer ;

export const { setWilayas, addWilaya, addWilayas, deleteWilaya, editWilaya } = WilayasSlice.actions; 