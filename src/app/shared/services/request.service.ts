import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { delay, tap, take } from 'rxjs/operators';

import { Task } from '../../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly API = `${environment.API}task`

  constructor(private http: HttpClient) { }

  getTask() {
    console.log(this.http.get<Task[]>(this.API))
    return this.http.get<Task[]>(this.API)

  }

  getTaskById(id) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  private newTask(task) {
    return this.http.post(this.API, task).pipe(take(1));
  }

  private updateTask(task) {
    console.log(task, ' update')
    return this.http.put(`${this.API}/${task.id}`, task).pipe(take(1));
  }

  save(task) {
    console.log(task);
    if (task.id) {
      console.log(task)
      return this.updateTask(task);
    } else {
      return this.newTask(task);
    }
  }

  deleteTask (id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
