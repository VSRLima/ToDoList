import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesTasksComponent } from './lates-tasks.component';

describe('LatesTasksComponent', () => {
  let component: LatesTasksComponent;
  let fixture: ComponentFixture<LatesTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatesTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
