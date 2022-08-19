import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { PrtofolioComponent } from './component/prtofolio/prtofolio.component';
import { ServiceComponent } from './component/service/service.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';







const routes: Routes = [
  // {path:'',redirectTo:'/home', pathMatch:'full'},
  // {path:'about', component:AboutComponent},
  // {path:'ourteam', component:OurTeamComponent},
  // {path:'product', component:PrtofolioComponent},
  // {path:'service', component:ServiceComponent},
  // {path:'home', component:MainPageComponent},
  // {path:'product/:id', component:ProjectDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
