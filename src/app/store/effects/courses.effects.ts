import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, switchMap } from "rxjs";
import { course, CourseResponse } from "src/app/data/models/courses";
import { CourseServiceService } from "src/app/data/service/course-service.service";
import { coursesFeatchApiSuccess,invokingCoursesApi  } from "../actions/courses.action";


@Injectable()
export class coursesEffects{
    constructor(private actions$:Actions, private courseService:CourseServiceService){}

    loadCourses$= createEffect(()=>
    this.actions$.pipe(
        ofType(invokingCoursesApi),
        switchMap(()=>{
            return this.courseService.getCourses()
            .pipe(map((data:CourseResponse) =>
            {
                const courses=data.data.map((course)=>({
                id:course.id,
                description:course.attributes.description,
                courseTitle:course.attributes.courseTitle,
                creator:course.attributes.creator,
                price:course.attributes.price,
                category:course.attributes.category,
                courseImg:course.attributes.courseImg,
                publishDate:course.attributes.publishDate,
        }))                
                return coursesFeatchApiSuccess({ allCourses:courses })
            }));
        })
    )
    
    )
    
}
// this.courseService.getCourses()
//     .subscribe((courses)=>(this.courses=courses.data.map(course=>({
//       id:course.id,
//       description:course.attributes.description,
//       courseTitle:course.attributes.courseTitle,
//       creator:course.attributes.creator,
//       price:course.attributes.price,
//       category:course.attributes.category,
//       courseImg:course.attributes.courseImg,
//       publishDate:course.attributes.publishDate,
//           })))
//   )