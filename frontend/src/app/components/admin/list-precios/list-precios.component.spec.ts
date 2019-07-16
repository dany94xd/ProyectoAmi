import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreciosComponent } from './list-precios.component';

describe('ListPreciosComponent', () => {
  let component: ListPreciosComponent;
  let fixture: ComponentFixture<ListPreciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPreciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
