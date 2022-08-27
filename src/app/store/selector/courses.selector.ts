import { createFeatureSelector } from "@ngrx/store";
import { course } from "src/app/data/models/courses";




export const selectCourse= createFeatureSelector<course[]>("mycourses")