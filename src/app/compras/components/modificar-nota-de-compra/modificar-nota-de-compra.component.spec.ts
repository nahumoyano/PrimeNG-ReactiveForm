import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNotaDeCompraComponent } from './modificar-nota-de-compra.component';

describe('ModificarNotaDeCompraComponent', () => {
  let component: ModificarNotaDeCompraComponent;
  let fixture: ComponentFixture<ModificarNotaDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarNotaDeCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarNotaDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
