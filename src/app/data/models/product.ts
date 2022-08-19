export interface ProductResponse{
    data:{ id:number,
     attributes:{
        projectName: string,
         description:string,
         availability:boolean,
         price:number,
         category:string,
         projectimg:string

     }}[]
 }
 export interface Product{
    id?:number,
    projectName: string,
    description:string,
    availability:boolean,
    price:number,
    category:string,
    projectimg:string


}