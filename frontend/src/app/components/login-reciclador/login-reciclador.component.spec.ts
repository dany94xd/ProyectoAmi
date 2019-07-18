import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRecicladorComponent } from './login-reciclador.component';

describe('LoginRecicladorComponent', () => {
  let component: LoginRecicladorComponent;
  let fixture: ComponentFixture<LoginRecicladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRecicladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRecicladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
