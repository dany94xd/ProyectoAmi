import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilrecolectorComponent } from './perfilrecolector.component';

describe('PerfilrecolectorComponent', () => {
  let component: PerfilrecolectorComponent;
  let fixture: ComponentFixture<PerfilrecolectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilrecolectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilrecolectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
