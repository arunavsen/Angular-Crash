import { Injectable } from '@angular/core';
import { TaskList } from 'src/app/mock-task';
import { ITask } from 'src/app/ITask';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<ITask[]> {
    const tasks = of(TaskList);
    return tasks;
  }
}
