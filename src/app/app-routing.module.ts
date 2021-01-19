import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { LoginComponent } from './login/login.component';
import { MytasksComponent } from './projects/mytasks/mytasks.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'chatscreen', component: ChatscreenComponent},
  { path:'projects', component: ProjectsComponent, children:[
      {path:'project', component:ProjectComponent},
      {path:'mytasks', component:MytasksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
