import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { ProjectComponent } from './projects/project/project.component';
import { MytasksComponent } from './projects/mytasks/mytasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FriendlistComponent,
    ChatscreenComponent,
    ProjectsComponent,
    NewprojectComponent,
    FriendlistComponent,
    ProjectComponent,
    MytasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
