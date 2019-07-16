import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarifaComponent } from './list-tarifa.component';

describe('ListTarifaComponent', () => {
  let component: ListTarifaComponent;
  let fixture: ComponentFixture<ListTarifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTarifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
