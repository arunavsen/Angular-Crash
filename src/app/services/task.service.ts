import { Injectable } from '@angular/core';
import { TaskList } from 'src/app/mock-task';
import { ITask } from 'src/app/ITask';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTask(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(url);
  }
}
