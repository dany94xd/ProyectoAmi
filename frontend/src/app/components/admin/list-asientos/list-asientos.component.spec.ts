import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsientosComponent } from './list-asientos.component';

describe('ListAsientosComponent', () => {
  let component: ListAsientosComponent;
  let fixture: ComponentFixture<ListAsientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAsientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
