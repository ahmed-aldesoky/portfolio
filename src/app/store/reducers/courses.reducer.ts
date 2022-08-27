import { createReducer,on } from "@ngrx/store";
import { course } from "src/app/data/models/courses";
import { coursesFeatchApiSuccess } from "../actions/courses.action";





export const initState:ReadonlyArray <course>=[]




export const courseReducer=createReducer(
    initState,
    on(coursesFeatchApiSuccess,(state,{allCourses})=>{
        return allCourses;
    })
    );