import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a user', () => {
    let testdata=[
      {name:"efe",email:"efe@gmail.com",password:"1234",passwordCheck:"1234"},
      {name:"efe",email:"",password:"1234",passwordCheck:"1234"},
      {name:"efe",email:"efe@gmail.com",password:"",passwordCheck:"1234"},
      {name:"efe",email:"",password:"123456",passwordCheck:"1234"}
    ];
    testdata.forEach(e =>{
      fixture.componentInstance.email=e.email;
      fixture.componentInstance.password=e.password;
      fixture.componentInstance.name=e.name;
      fixture.componentInstance.passwordCheck=e.passwordCheck;
      fixture.componentInstance.register();
      expect(fixture.componentInstance.email).toContain('@');
      expect(fixture.componentInstance.email).not.toEqual("");
      expect(fixture.componentInstance.password).not.toEqual("");
      expect(fixture.componentInstance.password.length).toBeGreaterThan(4);
      expect(fixture.componentInstance.passwordCheck).not.toEqual("");
      expect(fixture.componentInstance.passwordCheck).toEqual(
        fixture.componentInstance.password);
      expect(fixture.componentInstance.name).not.toEqual("");
    });
  });

});
