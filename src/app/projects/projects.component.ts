import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showProject():void {
    let projectsContainer = document.getElementById('projects-container');
    let myTasksContainer = document.getElementById('myTasks-container');

    if(projectsContainer.classList.contains('d-none')){
      projectsContainer.classList.remove('d-none');
      myTasksContainer.classList.add('d-none');
    }
  }
  showTasks():void{
    let projectsContainer = document.getElementById('projects-container');
    let myTasksContainer = document.getElementById('myTasks-container');

    if(myTasksContainer.classList.contains('d-none')){
      myTasksContainer.classList.remove('d-none');
      projectsContainer.classList.add('d-none');
    }
  }

}
