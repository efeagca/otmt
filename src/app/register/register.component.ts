import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string="";
  surname:string="";
  password:string="";
  email:string="";
  passwordCheck:string="";

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  register():void{
   
    if(this.email===""){
      window.alert("Email can not be empty.");
      return;
    }
    if(this.name===""){
      window.alert("Name can not be empty.");
      return;
    }
   
    if(this.password.length<4){
      window.alert("Password must have minimum 4 characters");
      return;
    }
    if(this.passwordCheck===""){
      window.alert("Password Check can not be empty.");
      return;
    }

    if(!this.email.includes("@")){
      window.alert("Email is invalid. Please write a valid email.");
      return;
    }
    
    if(this.password !== this.passwordCheck){
      window.alert("Password is not equal to Password Check");
      return;
    }
  
    let user = new User(this.name,this.surname,this.email,this.password);    
    this.userService.registerUser(user);
    this.router.navigateByUrl('/');
    
  }

}
