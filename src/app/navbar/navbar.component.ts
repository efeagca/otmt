import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}
  email;
  ngOnInit(): void {
    
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        if((this.router.url=="/") || (this.router.url=="/login")){
          this.email=="";
        }else{
          this.email=this.getCookie('email')
        }
      }
    });
  }

  getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }

}
