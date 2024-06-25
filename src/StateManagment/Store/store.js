import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "../Slices/Dom/NavigationSlice";
import CurentUserSlice from "../Slices/BackEnd/CurentUserSlice";
import WilayasSlice from "../Slices/BackEnd/WilayasSlice";
import StagesSlice from "../Slices/BackEnd/StagesSlice";
import SchoolsSlice from "../Slices/BackEnd/SchoolsSlice";
import StudentsSlice from "../Slices/BackEnd/StudentsSlice";
import FeatursSlice from "../Slices/BackEnd/FeatursSlice";
import StudentFeatursSlice from "../Slices/BackEnd/StudentFeatursSlice";

export const store = configureStore({
    reducer :{
        Navigation : NavigationSlice ,
        CurentUser : CurentUserSlice ,
        Wilayas : WilayasSlice ,
        Stages : StagesSlice ,
        Schools : SchoolsSlice ,
        Students : StudentsSlice ,
        Feathers : FeatursSlice,
        StudentFeather : StudentFeatursSlice,
    }
})