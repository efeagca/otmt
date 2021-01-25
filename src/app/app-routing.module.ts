import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { LoginComponent } from './login/login.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { MytasksComponent } from './projects/mytasks/mytasks.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chatscreen', component: ChatscreenComponent },
  { path: 'newproject', component: NewprojectComponent },
  { path: 'nt', component: NewtaskComponent },
  {
    path: 'projects', component: ProjectsComponent, children: [
      { path: 'project', component: ProjectComponent },
      { path: 'mytasks', component: MytasksComponent },
    ]
  },
  {
    path: 'project', component: ProjectdetailComponent, children: [
      { path: ":id", component: ProjectdetailComponent },
    ]
  },
  { path: "project/:id/newtask", component: NewtaskComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
