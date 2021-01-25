import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectComponent } from './newproject.component';

describe('NewprojectComponent', () => {
  let component: NewprojectComponent;
  let fixture: ComponentFixture<NewprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a project', () => {
    let testdata=[
          {projectName:"testprojectname"},
          {projectName:""}
        ];
    testdata.forEach(e =>{
          fixture.componentInstance.projectName=e.projectName;
          fixture.componentInstance.create();
          expect(fixture.componentInstance.projectName).not.toEqual("");
      });
  });

});
