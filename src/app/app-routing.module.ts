import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { PrtofolioComponent } from './component/prtofolio/prtofolio.component';
import { ServiceComponent } from './component/service/service.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { CoursesComponent } from './component/courses/courses.component';
import { BlogComponent } from './component/blog/blog.component';
import { ArticlesDetailsComponent} from './component/articles-details/articles-details.component';
import { CartComponent } from './component/cart/cart.component';
import { loginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { SignupGuard } from './data/guards/signup.guard';










const routes: Routes = [
   {path:'',redirectTo:'/home', pathMatch:'full'},
  // {path:'about', component:AboutComponent},
  // {path:'ourteam', component:OurTeamComponent},
  // {path:'product', component:PrtofolioComponent},
  // {path:'service', component:ServiceComponent},
  // {path:'home', component:MainPageComponent},
  // {path:'product/:id', component:ProjectDetailsComponent}
   {path:'home', component:MainPageComponent},
   {path:'courses', component:CoursesComponent},
   {path:'blog', component:BlogComponent},
   {path:'blog/:id', component:ArticlesDetailsComponent},
   {path:'cart', component:CartComponent},
   { path: 'login', component: loginComponent },
    { path: 'signup', canActivate: [SignupGuard], component: SignupComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
