import { createSlice } from "@reduxjs/toolkit";



const CurentUserSlice = createSlice({
    name : "CurentUser",
    initialState: {
        user: {},
        token: localStorage.getItem("ACCESS_TOKEN") ?? "",
        userType : ""
    },
    reducers:{
        setToken : (state , action)=>{
            state.token = action.payload
        },
        setUser : (state , action)=>{
            state.user = action.payload             
        },
        setUserType : (state ,action)=>{
            state.userType = action.payload
        },
        clearUser : (state)=>{
            localStorage.removeItem("ACCESS_TOKEN") 
            state.user = {}
            state.userType = ""
            state.token = ""
        },
        is: (state, action) => (userType) => {
            return state.user?.keys.profileable_type == userType ? true : false;
        }
    }
})

export default CurentUserSlice.reducer ;

export const {setToken , setUser , clearUser , setUserType } = CurentUserSlice.actions; 