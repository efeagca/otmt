import { Injectable } from '@angular/core';
import { Users } from './user-datasource';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  checkForLogin(email:string,password:string):boolean{
    let userList = Users;
    let user = userList.find((eleman)=>{return eleman.email == email});

    if(user.password==password) return true; else return false;
  }
}


