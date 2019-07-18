import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRecicladorComponent } from './perfil-reciclador.component';

describe('PerfilRecicladorComponent', () => {
  let component: PerfilRecicladorComponent;
  let fixture: ComponentFixture<PerfilRecicladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilRecicladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRecicladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
