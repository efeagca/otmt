import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  projectid;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.projectid= +params.id;
    });
  }

}
