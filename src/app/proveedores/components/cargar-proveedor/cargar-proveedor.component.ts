import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Proveedores } from '../../interfaces/proveedores';

@Component({
  selector: 'app-cargar-proveedor',
  templateUrl: './cargar-proveedor.component.html',
  styleUrls: ['./cargar-proveedor.component.css'],
})
export class CargarProveedorComponent implements OnInit {
  items: MenuItem[];
  labels: MenuItem[];
  nodes: any[];
  cities: Proveedores[];
  iva: Proveedores[];
  selectedCity: Proveedores;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.iva = [
      { name: 'Consumidor Final', code: '' },
      { name: 'Exento', code: '' },
    ];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Proveedores',
      },
      {
        label: 'Datos Bancarios',
      },
      {
        label: 'Descuentos y Premios',
      },
      {
        label: 'Información de Pago',
      },
    ];

    this.labels = [
      {
        label: 'Proveedores',
      },
      {
        label: 'Gestión de Proveedores',
        icon: 'pi pi-chevron-right',
      },
      {
        label: 'Cargar Proveedores',
        icon: 'pi pi-chevron-right',
      },
    ];
  }
}
