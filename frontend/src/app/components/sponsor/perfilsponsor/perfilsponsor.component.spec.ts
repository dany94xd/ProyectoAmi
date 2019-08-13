import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilsponsorComponent } from './perfilsponsor.component';

describe('PerfilsponsorComponent', () => {
  let component: PerfilsponsorComponent;
  let fixture: ComponentFixture<PerfilsponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilsponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
