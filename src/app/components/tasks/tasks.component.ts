import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { TaskList } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.styl']
})
export class TasksComponent implements OnInit {

  tasks: ITask[] = TaskList;
  constructor() { }

  ngOnInit(): void {
  }

}
