import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskModule } from './view/task.module';
import { AppRoutingModule } from './app.routing';
import { ListComponent } from './view/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './shared/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaskModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
