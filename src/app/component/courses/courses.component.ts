import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { course } from 'src/app/data/models/courses';
import { CourseServiceService } from 'src/app/data/service/course-service.service';
import { invokingCoursesApi } from 'src/app/store/actions/courses.action';
import { selectCourse } from 'src/app/store/selector/courses.selector';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:course[]=[]
  filterdCourses:course[]=[]
  _filterText:string=""
   componenetShow:number=0

  constructor(private courseService:CourseServiceService, private store:Store) { }
  coures$= this.store.pipe(select(selectCourse))

  ngOnInit(): void {
    this.store.dispatch(invokingCoursesApi())

    

  //   this.courseService.getCourses()
  //   .subscribe((courses)=>(this.courses=courses.data.map(course=>({
  //     id:course.id,
  //     description:course.attributes.description,
  //     courseTitle:course.attributes.courseTitle,
  //     creator:course.attributes.creator,
  //     price:course.attributes.price,
  //     category:course.attributes.category,
  //     courseImg:course.attributes.courseImg,
  //     publishDate:course.attributes.publishDate,
  //         })))
  // )
  }

  // **********----------filtering courses---------********----
  // filtercourse(value:string){
  //   console.log(this.coures$.subscribe);
    
  //   this._filterText=value
  //   this.filterdCourses= this.filterProjectByCategory(this._filterText)
  //     }
  // filterProjectByCategory(filterTerm: string){
  //   if(this.courses.length === 0 || this._filterText === ''){
  //     return this.courses;
  // } else {
  //     return this.courses.filter((course) => 
  //     { 
  //         return course.category.toLowerCase() === filterTerm.toLowerCase();
  //     })}}

      showcomponent(){
        this.componenetShow===0? this.componenetShow=1 :this.componenetShow=0;
        console.log(this.componenetShow);
        
      }

}
