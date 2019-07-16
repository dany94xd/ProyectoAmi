import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocalidadesComponent } from './list-localidades.component';

describe('ListLocalidadesComponent', () => {
  let component: ListLocalidadesComponent;
  let fixture: ComponentFixture<ListLocalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLocalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
