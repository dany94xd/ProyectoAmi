import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresomaticulaComponent } from './ingresomaticula.component';

describe('IngresomaticulaComponent', () => {
  let component: IngresomaticulaComponent;
  let fixture: ComponentFixture<IngresomaticulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresomaticulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresomaticulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
