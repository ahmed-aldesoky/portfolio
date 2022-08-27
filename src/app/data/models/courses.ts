export interface CourseResponse{
    data:{ id:number,
     attributes:{
        courseTitle: string,
         description:string,
         creator:string,
         price:number,
         category:string,
         courseImg:string,
         publishDate:string

     }}[]
 }
 export interface course{
    id?:number,
    courseTitle: string,
    description:string,
    creator:string,
    price:number,
    category:string,
    courseImg:string,
    publishDate:string



}