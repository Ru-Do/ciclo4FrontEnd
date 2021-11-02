import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPublicacionesComponent } from './filtro-publicaciones.component';

describe('FiltroPublicacionesComponent', () => {
  let component: FiltroPublicacionesComponent;
  let fixture: ComponentFixture<FiltroPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
