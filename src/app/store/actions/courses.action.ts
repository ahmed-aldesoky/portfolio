import { createAction, props } from "@ngrx/store";
import { course } from "src/app/data/models/courses";




export const invokingCoursesApi= createAction(
    "[courses Api] invoking courses featch Api"
)

export const coursesFeatchApiSuccess= createAction(
    "[courses Api] invoking courses featch Api success",
    props<{allCourses:course[]}>()
)