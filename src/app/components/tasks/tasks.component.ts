import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.styl']
})
export class TasksComponent implements OnInit {

  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>this.tasks=tasks);
  }

  deleteTask(task: ITask){
    this.taskService
    .deleteTask(task)
    .subscribe(
      ()=>this.tasks.filter(
        (t)=> t.id !== task.id));
  }
}
