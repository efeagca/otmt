import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService, UserService } from '../user.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  projectid: number;
  email: any;
  taskid: number;
  taskTitle: string;
  taskMembers= [];
  state: string;
  toDate: NgbDate  | null = null;
  fromDate: NgbDate;priority: number;
;
  taskDesc: string;
  public unassigned="Unassigned";
  public assigned="--";

  hoveredDate: NgbDate | null = null;

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

  
  constructor(calendar: NgbCalendar,private projectService:ProjectService,private userService:UserService,private route:ActivatedRoute) { }

  teamMembers=[]
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=[];
  public removeFromAssignned:string;

  
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
    this.route.paramMap.subscribe(params => {
      let id= +params.get('taskid');
      this.taskid = id;
    });
    
    let project = this.projectService.getProjectById(this.projectid);
    let task=project.todoTasks.find(a=> a.id===this.taskid)
    if(!task){
      task=project.doingTasks.find(a=> a.id===this.taskid)
    }
    if(!task){
      task=project.doneTasks.find(a=> a.id===this.taskid)
    }
    this.taskTitle=task.title;
    this.taskMembers=task.assignment

    this.state=task.state;
    this.toDate=task.toDate;
    this.fromDate=task.fromDate;
    this.taskDesc=task.description;
    this.priority=task.priority;
    this.selectedTeamMembers=this.taskMembers;
    this.teamMembers=project.teamMembers;

    this.unSelectedTeamMembers=this.teamMembers;
    

    this.selectedTeamMembers.forEach(e => {
      this.unSelectedTeamMembers=this.unSelectedTeamMembers.filter(e2=> e.email!==e2.email)
    });
    

  }

getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}
  updateTask():void{
    if(this.taskTitle===""){
      window.alert("Task title can not be empty.");
      return;
    }
    if(this.toDate===null){
      window.alert("You must determine the deadline.");
      return;
    }
  }

}
