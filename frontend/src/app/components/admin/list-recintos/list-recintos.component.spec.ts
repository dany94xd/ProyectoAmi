import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecintosComponent } from './list-recintos.component';

describe('ListRecintosComponent', () => {
  let component: ListRecintosComponent;
  let fixture: ComponentFixture<ListRecintosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecintosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecintosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
