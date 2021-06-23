import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/ITask';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.styl']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
