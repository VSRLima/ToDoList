import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Task } from '../../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly API = `${environment.API}task`

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<Task[]>(this.API);
  }

  getTaskById(id: number) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  private newTask(task: Task) {
    return this.http.post(this.API, task).pipe(take(1));
  }

  private updateTask(task: Task) {
    return this.http.put(`${this.API}/${task.id}`, task).pipe(take(1));
  }

  save(task: Task) {
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

  saveStatus(status: Task, id: number) {
    return this.http.put(`${this.API}/${id}`, status).pipe(take(1))
  }
}
