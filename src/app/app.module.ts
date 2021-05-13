import { LatesTasksComponent } from './view/lates-tasks/lates-tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskModule } from './view/task.module';
import { AppRoutingModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CalendarModule, DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './shared/calendar/calendar.component';
import {MatIconModule} from '@angular/material/icon';
import { DataPickerComponent } from './shared/data-picker/data-picker.component';
import { ListComponent } from './view/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DataPickerComponent,
    ListComponent,
    LatesTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaskModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatIconModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
