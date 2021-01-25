import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  constructor() { }
  public status="Online";

  public onChangeStatusSelect(value):void{
    this.status=value;
  }

  ngOnInit(): void {
  }

}
