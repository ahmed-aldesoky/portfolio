export interface BlogResponse{
    data:{ id:number,
     attributes:{
        atricleTitle: string,
        articleContent:string,
         category:string,
         articleImg:string,
         articleDate:string,
         articleSummary:string

     }}[]
 }
 export interface Blog{
    id?:number,
    atricleTitle: string,
        articleContent:string,
         category:string,
         articleImg:string,
         articleDate:string,
         articleSummary:string



}
export interface ArticleResponse{
    data:{ id:number,
     attributes:{
        atricleTitle: string,
        articleContent:string,
         category:string,
         articleImg:string,
         articleDate:string,
         articleSummary:string

     }}
 }