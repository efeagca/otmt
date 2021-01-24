import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../user';
import { ProjectService } from '../user.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  constructor(private projectService:ProjectService, private route:ActivatedRoute) { }

  project:Project;
  todo=[];
  doing=[];
  done=[];

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      let id= +params.id;
      console.log(id)
      this.project = this.projectService.getProjectById(id);
    });

      this.todo=this.project.todoTasks;
      this.doing=this.project.doingTasks;
      this.done=this.project.doneTasks;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

