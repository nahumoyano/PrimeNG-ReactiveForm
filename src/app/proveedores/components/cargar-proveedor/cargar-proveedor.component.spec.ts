import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarProveedorComponent } from './cargar-proveedor.component';

describe('CargarProveedorComponent', () => {
  let component: CargarProveedorComponent;
  let fixture: ComponentFixture<CargarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
