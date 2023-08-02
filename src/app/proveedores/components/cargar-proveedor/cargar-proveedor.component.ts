import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Proveedores } from '../../interfaces/proveedores';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Iva } from '../../interfaces/iva/iva';

@Component({
  selector: 'app-cargar-proveedor',
  templateUrl: './cargar-proveedor.component.html',
  styleUrls: ['./cargar-proveedor.component.css'],
})
export class CargarProveedorComponent implements OnInit {
  formulario: FormGroup;

  items: MenuItem[];
  labels: MenuItem[];
  nodes: any[];
  cities: Proveedores[];
  iva: Iva[];
  selectedCity: Proveedores;

  constructor(private formBuilder: FormBuilder) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.iva = [
      { type: 'Consumidor Final', code: '2' },
      { type: 'Exento', code: '2' },
    ];
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      direction: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      webSite: new FormControl('', [Validators.required]),
      inoBruto: new FormControl('', [Validators.required]),
    });

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

  // get controlName(): FormControl {
  //   return this.formulario.controls['name'] as FormControl;
  // }
}
