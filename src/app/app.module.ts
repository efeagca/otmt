import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { ProjectsComponent } from './projects/projects.component';
=======
import { NewprojectComponent } from './newproject/newproject.component';
>>>>>>> origin/main
import { FriendlistComponent } from './friendlist/friendlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    ProjectsComponent,
=======
    NewprojectComponent,
>>>>>>> origin/main
    FriendlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
