import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBloquesComponent } from './list-bloques.component';

describe('ListBloquesComponent', () => {
  let component: ListBloquesComponent;
  let fixture: ComponentFixture<ListBloquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBloquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBloquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
