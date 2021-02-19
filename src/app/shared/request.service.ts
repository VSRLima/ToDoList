import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { delay, tap, take } from 'rxjs/operators';

import { Task } from './../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly API = `${environment.API}task`

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<Task[]>(this.API).pipe(
      delay(2000)
    );
  }

  getTaskById(id) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  private newTask(task) {
    return this.http.post(this.API, task).pipe(take(1));
  }

  private updateTask(task) {
    return this.http.put(`${this.API}/${task.id}`, task).pipe(task(1));
  }

  save(task) {
    if (task.id) {
      return this.updateTask(task);
    } else {
      return this.newTask(task);
    }
  }

  deleteTask (id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
