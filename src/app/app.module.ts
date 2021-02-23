import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskModule } from './view/task.module';
import { AppRoutingModule } from './app.routing';
import { ListComponent } from './view/list/list.component';
import { EditTaskComponent } from './view/edit-task/edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaskModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
