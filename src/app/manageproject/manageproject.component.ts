import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService, UserService } from '../user.service';

@Component({
  selector: 'app-manageproject',
  templateUrl: './manageproject.component.html',
  styleUrls: ['./manageproject.component.css']
})
export class ManageprojectComponent implements OnInit {
  projectid: number;
  email: any;

  public listsubstruct(list1,list2){
    list2.array.forEach(e => {
      list1.filter(e2=> e.email!==e2.email)
    });

  }
  
  constructor(private projectService:ProjectService,private userService:UserService,private route:ActivatedRoute) { }

  users=this.userService.userList;
  teamMembers=[]
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=[];
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
    this.email=this.getCookie("email");
    this.route.paramMap.subscribe(params => {
      let id= +params.get('id');
      this.projectid = id;
    });
    let project = this.projectService.getProjectById(this.projectid);
    this.projectName=project.name;
    this.selectedTeamMembers=project.teamMembers
    this.isPublic=project.isPublic;
    this.description=project.description;
    this.teamMembers=project.teamMembers;
    this.unSelectedTeamMembers=this.users;
    

    this.selectedTeamMembers.forEach(e => {
      this.unSelectedTeamMembers=this.unSelectedTeamMembers.filter(e2=> e.email!==e2.email)
    });

    this.unSelectedTeamMembers =this.unSelectedTeamMembers.filter(o => o.email !== this.email);

  }

getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}
  update():void{
    if(this.projectName===""){
      window.alert("Project name can not be empty.")
      return;
    }
  }

}
