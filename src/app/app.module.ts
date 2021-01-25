import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { ProjectComponent } from './projects/project/project.component';
import { MytasksComponent } from './projects/mytasks/mytasks.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerRangeComponent } from './datepicker-range/datepicker-range.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VideoconferenceComponent } from './videoconference/videoconference.component';
import { MenuComponent } from './projectdetail/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProjectsComponent,
    NewprojectComponent,
    FriendlistComponent,
    NewtaskComponent,
    ChatscreenComponent,
    ProjectComponent,
    MytasksComponent,
    DatepickerRangeComponent,
    ProjectdetailComponent,
    PagenotfoundComponent,
    VideoconferenceComponent,
    MenuComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    CommonModule, NgbModule, BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
