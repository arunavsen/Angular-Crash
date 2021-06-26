import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIServiceService {

  private showAddTask: boolean;
  private subject = new Subject<any>();

  constructor() { }

  // the function that we want to call
  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // we will make the toggle observable here.
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
