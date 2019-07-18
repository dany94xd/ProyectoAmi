import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrecolectorComponent } from './loginrecolector.component';

describe('LoginrecolectorComponent', () => {
  let component: LoginrecolectorComponent;
  let fixture: ComponentFixture<LoginrecolectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrecolectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrecolectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
