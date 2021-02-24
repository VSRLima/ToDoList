import { TaskResolverGuard } from './shared/task-resolver.guard';
import { EditTaskComponent } from './view/edit-task/edit-task.component';
import { ListComponent } from './view/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'novo', component: EditTaskComponent,
  resolve: {
    task: TaskResolverGuard
  } },
  { path: 'editar/:id', component: EditTaskComponent, resolve: {
    task: TaskResolverGuard
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
