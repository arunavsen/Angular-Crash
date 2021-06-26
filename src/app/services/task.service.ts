<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/ITask';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root',
=======
import { Injectable } from '@angular/core';
import { TaskList } from 'src/app/mock-task';
import { ITask } from 'src/app/ITask';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

<<<<<<< HEAD
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
=======
  constructor(private http: HttpClient) { }

  getTask(): Observable<ITask[]> {
>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(url);
  }
<<<<<<< HEAD

  updateTaskReminder(task: ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(url, task, httpOptions);
  }

  addTask(task: ITask): Observable<ITask>{
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }

=======
>>>>>>> a64e0e38f31f376033b27f3f934af37a00f2b811
}
