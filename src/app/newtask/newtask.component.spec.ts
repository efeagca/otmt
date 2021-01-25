import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtaskComponent } from './newtask.component';

describe('NewtaskComponent', () => {
  let component: NewtaskComponent;
  let fixture: ComponentFixture<NewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewtaskComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a task', () => {
    let testdata = [
      { taskName: "testtaskname" },
      { taskName: "" }
    ];
    testdata.forEach(e => {
      fixture.componentInstance.title = e.taskName;
      fixture.componentInstance.createTask();
      expect(fixture.componentInstance.title).not.toEqual("");
    });
  });

});
