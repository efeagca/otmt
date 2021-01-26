import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../user';
import { ProjectService, UserService } from '../user.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  constructor(private projectService:ProjectService,private userService:UserService, private router:Router) { }

  teamMembers=this.userService.userList;
  
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=this.teamMembers;
  public removeFromAssignned:string;

  projectName:string ="";
  isPublic:boolean;
  description:string="";

  public onChangeAssignSelect(event):void{

    this.selectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].email ===  event.target.value)]);
    
    this.unSelectedTeamMembers =this.unSelectedTeamMembers.filter(o => o.email !== event.target.value);
  }

  public removeAssignedButton(email){
    this.selectedTeamMembers =this.selectedTeamMembers.filter(o => o.email !== email);
    this.unSelectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].email ===  email)]);
  }
  ngOnInit(): void {
  }

  create():void{
    if(this.projectName===""){
      window.alert("Project name can not be empty.")
      return;
    }
    let project = new Project();
    project.name=this.projectName;
    project.isPublic=this.isPublic;
    project.description=this.description;
    project.teamMembers=this.teamMembers;
    project.taskCount=0
    project.todoTasks=[];
    project.doingTasks=[];
    project.doneTasks=[];

    this.projectService.createProject(project);
    this.router.navigateByUrl('/projects/project');
  }

}
