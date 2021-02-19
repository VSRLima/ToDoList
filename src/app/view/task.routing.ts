import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const taskRoutes: Routes = [
  { path:'', component: ListComponent, children: [
    { path: 'editar/:id', component: EditTaskComponent },
    { path: 'novo', component: EditTaskComponent }
  ] }
];

@NgModule({
    imports: [RouterModule.forChild(taskRoutes)],
    exports: [RouterModule]
})

export class TaskRoutingModule {}
