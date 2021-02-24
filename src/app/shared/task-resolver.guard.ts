import { RequestService } from './request.service';
import { Task } from './../model/task.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TaskResolverGuard implements Resolve<Task> {

  constructor(private service: RequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if(route.params && route.params['id']) {
      return this.service.getTaskById(route.params['id']);
    }

    return of({
      id: null,
      title: null,
      description: null
    })
  }
}
