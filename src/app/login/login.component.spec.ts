import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should login', () => {
    let testdata=[
      {email:"gsezgin@gmail.com",password:"gsezgin"},
      {email:"testemail",password:"12345"},
      {email:"g@gmail.com",password:""},
      {email:"",password:"gsezgin"}
    ];
    testdata.forEach(e =>{
      fixture.componentInstance.email=e.email;
      fixture.componentInstance.password=e.password;
      fixture.componentInstance.loginClicked();
      expect(fixture.componentInstance.email).toContain('@');
      expect(fixture.componentInstance.email).not.toEqual("");
      expect(fixture.componentInstance.password).not.toEqual("");
      expect(fixture.componentInstance.password.length).toBeGreaterThan(4);
    });
  });



});
