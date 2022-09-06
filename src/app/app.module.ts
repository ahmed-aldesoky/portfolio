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
import { ServiceComponent } from './component/service/service.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './component/courses/courses.component';
import { CartComponent } from './component/cart/cart.component';
import { MarketComponent } from './component/market/market.component';
import { StoreModule } from '@ngrx/store'
import { productReducer } from './products.reducer';
import { allProductReducer } from './store/reducers/allProduct.Reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './component/blog/blog.component';
import { ArticlesComponent } from './component/articles/articles.component';
import { ArticlesDetailsComponent } from './component/articles-details/articles-details.component';
import { MatrielsModule } from './data/matriels/matriels.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { courseReducer } from './store/reducers/courses.reducer';
import { coursesEffects } from './store/effects/courses.effects';
import { ToastComponent } from './component/toast/toast.component';
import { MessageComponent } from './component/message/message.component';
import { TitleComponent } from './component/title/title.component';
import { SignupComponent } from './component/signup/signup.component';
import { loginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




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
    ServiceComponent,
    CoursesComponent,
    CartComponent,
    MarketComponent,
    BlogComponent,
    ArticlesComponent,
    ArticlesDetailsComponent,
    ToastComponent,
    MessageComponent,
    TitleComponent,
    SignupComponent,
    loginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({popProduct:productReducer,allProduct:allProductReducer}),
    BrowserAnimationsModule,
    MatrielsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature("mycourses",courseReducer),
    EffectsModule.forFeature([coursesEffects]),
    ReactiveFormsModule,
    // NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
