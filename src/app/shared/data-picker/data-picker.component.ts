import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.less']
})
export class DataPickerComponent {
  @Output() eventDate = new EventEmitter();
  public dataValue: Date = new Date();

  constructor() {
  }

  onChange(args: any) {
    if(args == null) {
      this.eventDate.emit(this.dataValue);
    } else {
      this.eventDate.emit(args)
    }
  }

  onLoad() {
    this.eventDate.emit(this.dataValue);
  }

}
