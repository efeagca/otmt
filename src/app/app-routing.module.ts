import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { DocsComponent } from './docs/docs.component';
import { LoginComponent } from './login/login.component';
import { ManageprojectComponent } from './manageproject/manageproject.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { MytasksComponent } from './projects/mytasks/mytasks.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { VideoconferenceComponent } from './videoconference/videoconference.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'chatscreen', component: ChatscreenComponent},
  { path:'newproject', component: NewprojectComponent},
  { path:'videoconference', component: VideoconferenceComponent},
  { path:'newtask', component: NewtaskComponent},
  { path:'projects', component: ProjectsComponent, children:[
      {path:'project', component:ProjectComponent},
      {path:'mytasks', component:MytasksComponent},
    ]
  },
  {
    path: 'project', component: ProjectdetailComponent, children: [
      { path: ":id", component: ProjectdetailComponent},
    ]
  },
  { path:'project/:id/manage', component: ManageprojectComponent},
  { path:'project/:id/docs', component: DocsComponent},
  { path: "project/:id/newtask", component: NewtaskComponent },
  { path: "project/:id/task/:taskid", component: UpdatetaskComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
