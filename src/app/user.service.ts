import { Injectable } from '@angular/core';
import { Project, User } from './user';
import { Projects, Users } from './user-datasource';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = Users;
  constructor() { }

  checkForLogin(email:string,password:string):boolean{
 
    let user = this.userList.find((eleman)=>{return eleman.email == email});

    if(user.password==password) return true; else return false;
  }

  registerUser(user:User){
    this.userList.push(user);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService{
  projectList:Project[] = Projects;
  constructor() { }

  getProjects():Project[]{
    return this.projectList;
  }

  createProject(project:Project):void{
    project.id=this.projectList.length;
    this.projectList.push(project);
  }
}


