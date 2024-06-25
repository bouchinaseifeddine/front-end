import { createSlice } from "@reduxjs/toolkit";



const StagesSlice = createSlice({
    name : "Stages",
    initialState: [],
    reducers:{
        setStages : (state , action)=>{
            return action.payload
        },
        addStage : (state , action)=>{
            state.unshift(action.payload)              
        },
        addStages : (state , action)=>{
            return state.unshift(action.payload)              
        },
        deleteStage : (state ,action)=>{
            return state.filter((item)=> item.id != action.payload)
        },
        editStage : (state , action)=>{
            return state.map((item)=> item.id == action.payload.id ? action.payload : item )
        }
    }
})

export default StagesSlice.reducer ;

export const { setStages, addStage, addStages, deleteStage, editStage } = StagesSlice.actions; 