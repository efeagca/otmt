import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/user';
import { ProjectService} from 'src/app/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  projects:Project[];

  ngOnInit(): void {
    this.projects=this.projectService.getProjects();
  }

}
