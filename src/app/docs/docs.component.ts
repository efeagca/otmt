import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  public projectid;
  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id= +params.get('id');
      this.projectid = id;
    });
  }
}
