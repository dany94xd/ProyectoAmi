import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspolListComponent } from './espol-list.component';

describe('EspolListComponent', () => {
  let component: EspolListComponent;
  let fixture: ComponentFixture<EspolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
