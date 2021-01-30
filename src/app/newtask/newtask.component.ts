import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../user';
import { ProjectService } from '../user.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})


export class NewtaskComponent implements OnInit {
  email: any;
  projectName: string;
  teamMembers=[]
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=[];
  public removeFromAssignned:string;
  public unassigned="Unassigned";
  public assigned="--";

  public title="";
  public state="To Do";
  public priority=1;
  public description;
  public projectid;

  constructor(calendar: NgbCalendar, private route:ActivatedRoute, private projectService:ProjectService, private router:Router) { 
      this.fromDate = calendar.getToday();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id= +params.get('id');
      this.projectid = id;
    });
    this.email=this.getCookie("email");

    let project = this.projectService.getProjectById(this.projectid);
    this.projectName=project.name;
    this.description=project.description;
    this.teamMembers=project.teamMembers;
    this.unSelectedTeamMembers=project.teamMembers;

    
    this.unSelectedTeamMembers =this.unSelectedTeamMembers.filter(o => o.email !== this.email);

  }
 

  
  public onChangeAssignSelect(event):void{
    this.selectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].email ===  event.target.value)]);
    
    this.unSelectedTeamMembers =this.unSelectedTeamMembers.filter(o => o.email !== event.target.value);
  }

  public removeAssignedButton(email){
    this.selectedTeamMembers =this.selectedTeamMembers.filter(o => o.email !== email);
    this.unSelectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].email ===  email)]);
   }

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

 

  createTask():void{
    if(this.title===""){
      window.alert("Task title can not be empty.");
      return;
    }
    if(this.toDate===null){
      window.alert("You must determine the deadline.");
      return;
    }

    let task = new Task();
    task.assignment=this.selectedTeamMembers;
    task.toDate=`${this.toDate.day}/${this.toDate.month}/${this.toDate.year}`;
    task.fromDate=`${this.fromDate.day}/${this.fromDate.month}/${this.fromDate.year}`;
    task.projectid=this.projectid
    task.priority=this.priority;
    task.title=this.title;
    task.description=this.description;
    task.state=this.state;
    console.log(task);

    this.projectService.createTask(task);
    this.router.navigate(['project'],{queryParams:{id:this.projectid}});
  }
  getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
}
