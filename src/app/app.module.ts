import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { NewtaskComponent } from './newtask/newtask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProjectsComponent,
    NewprojectComponent,
    FriendlistComponent,
    NewtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
