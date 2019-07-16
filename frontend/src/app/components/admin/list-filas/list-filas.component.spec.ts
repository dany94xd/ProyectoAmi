import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilasComponent } from './list-filas.component';

describe('ListFilasComponent', () => {
  let component: ListFilasComponent;
  let fixture: ComponentFixture<ListFilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
