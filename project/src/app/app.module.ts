import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from  '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MaterialModule} from './material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './book/book.component';
import { RegisterService } from './register.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { LoginService } from './login.service';
import { FirstService } from './first.service';
import{HelpComponent} from './help/help.component';
import{MatInputModule,MatCardModule,MatButtonModule,MatExpansionModule} from '@angular/material';
import { ListComponent } from './list/list.component';
import { EventComponent } from './event/event.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    RegisterComponent,
    LoginComponent,
    HelpComponent,
    ListComponent,
    NavbarComponent,
    BookComponent,
    LocationComponent,
    EventComponent,
    FrontComponent
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
  
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent},
      {path : 'location', component : LocationComponent},
      {path : 'login', component: LoginComponent},
      {path : 'first',component : FirstComponent},
      {path : 'register', component: RegisterComponent},
      {path : 'book', component: BookComponent},
      {path : 'help',component: HelpComponent },
      {path:'list',component:ListComponent},
      {path:'event',component:EventComponent},
      {path : 'front',component:FrontComponent}
      ])
    ],
  
  providers: [RegisterService,HttpClient,LoginService,FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
