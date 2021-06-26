import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.styl'],
})
export class TasksComponent implements OnInit {
<<<<<<< HEAD
  tasks: ITask[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: ITask){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
=======

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
>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
  }
}
