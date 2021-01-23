import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})


export class NewtaskComponent implements OnInit {

  constructor(calendar: NgbCalendar) { 
      this.fromDate = calendar.getToday();
  }
 
  teamMembers=[
    {name:"Gökçin Sezgin < gokcin@gmail.com >",value:'1'},
    {name:"Enes Varcan < enes@gmail.com >",value:'2'},
    {name:"Mustafa Can Bayar < mbc@gmail.com >",value:'3'},
]
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=this.teamMembers;
  public removeFromAssignned:string;
  public unassigned="Unassigned";
  public assigned="--";
  
  public onChangeAssignSelect(event):void{

    this.selectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].value ===  event.target.value.toString())]);
    
    this.unSelectedTeamMembers =this.unSelectedTeamMembers.filter(o => o.value !== event.target.value.toString());
  }

  public removeAssignedButton(value){
    this.selectedTeamMembers =this.selectedTeamMembers.filter(o => o.value !== value.toString());
    this.unSelectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].value ===  value.toString())]);
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

  ngOnInit(): void {
  }

}
