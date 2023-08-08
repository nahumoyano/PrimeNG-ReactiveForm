import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPagoALoteDeFacturaComponent } from './cargar-pago-a-lote-de-factura.component';

describe('CargarPagoALoteDeFacturaComponent', () => {
  let component: CargarPagoALoteDeFacturaComponent;
  let fixture: ComponentFixture<CargarPagoALoteDeFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPagoALoteDeFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarPagoALoteDeFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
