import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})


export class NewtaskComponent implements OnInit {

  constructor() { }
 
  teamMembers=[
    {name:"Gökçin Sezgin < gokcin@gmail.com >",value:'1'},
    {name:"Enes Varcan < enes@gmail.com >",value:'2'},
    {name:"Mustafa Can Bayar < mbc@gmail.com >",value:'3'},
]
  public selectedTeamMembers=[];
  public unSelectedTeamMembers=this.teamMembers;
  public removeFromAssignned:string;

  public onChangeAssignSelect(event):void{

    this.selectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].value ===  event.target.value.toString())]);
    
    this.unSelectedTeamMembers =this.unSelectedTeamMembers.filter(o => o.value !== event.target.value.toString());
  }

  public removeAssignedButton(value){
    this.selectedTeamMembers =this.selectedTeamMembers.filter(o => o.value !== value.toString());
    this.unSelectedTeamMembers.push(this.teamMembers[Object.keys(this.teamMembers).find(key => this.teamMembers[key].value ===  value.toString())]);
  }

  ngOnInit(): void {
  }

}
