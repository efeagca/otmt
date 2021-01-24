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
  
//   [
//     {name:"Gökçin Sezgin < gokcin@gmail.com >",value:'1'},
//     {name:"Enes Varcan < enes@gmail.com >",value:'2'},
//     {name:"Mustafa Can Bayar < mbc@gmail.com >",value:'3'},
// ]
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=this.teamMembers;
  public removeFromAssignned:string;

  projectName:string;
  isPublic:boolean;
  description:string;

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
