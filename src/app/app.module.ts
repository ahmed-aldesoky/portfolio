import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PrtofolioComponent } from './component/prtofolio/prtofolio.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import { ServiceComponent } from './component/service/service.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    NavBarComponent,
    PrtofolioComponent,
    OurTeamComponent,
    ContactUsComponent,
    AboutComponent,
    ProjectDetailsComponent,
    ServiceComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
