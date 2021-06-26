import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/ITask';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.styl'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
<<<<<<< HEAD
  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter();
=======

>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

<<<<<<< HEAD
  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
=======
  onDelete(task){
    this.onDeleteTask.emit();
  }

>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
}
