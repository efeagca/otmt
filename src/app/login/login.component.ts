import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string ="";
  constructor(private userService: UserService, public router:Router) { }

  ngOnInit(): void {
  }

  loginClicked():void{
    
    if(this.userService.checkForLogin(this.email,this.password)){
      document.cookie = `email = ${this.email}`;
      this.router.navigateByUrl('/projects/project');
    }
  }
}
