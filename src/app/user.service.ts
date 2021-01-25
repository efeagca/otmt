import { Injectable } from '@angular/core';
import { Project, Task, User } from './user';
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

  getProjectById(id:number):Project{
    return this.projectList.find((eleman)=>{
      return eleman.id==id;
    })
  }

  createProject(project:Project):void{
    project.id=this.projectList.length+1;
    this.projectList.push(project);
  }

  createTask(task:Task):void{
    let project = this.getProjectById(task.projectid);
    project.taskCount++;
    task.id=project.taskCount;

    switch(task.state){
      case "To Do":
        project.todoTasks.push(task);
        break;
      case "Doing":
        project.doingTasks.push(task);
        break;
      case "Done":
        project.doneTasks.push(task);
        break;
    }
  }
}


