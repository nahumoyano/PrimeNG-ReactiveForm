import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Iva } from 'src/app/proveedores/interfaces/iva/iva';
import { Proveedores } from 'src/app/proveedores/interfaces/proveedores';

@Component({
  selector: 'app-cargar-cliente',
  templateUrl: './cargar-cliente.component.html',
  styleUrls: ['./cargar-cliente.component.css'],
  providers: [MessageService],
})
export class CargarClienteComponent implements OnInit {
  formulario: FormGroup;

  items: MenuItem[];

  home: MenuItem;

  nodes: any[];
  cities: Proveedores[];
  iva: Iva[];
  tipoDoc: any[];
  tipoProv: any[];
  moneda: any[];
  grupos: any[];
  retIib: any[];
  selectedCity: Proveedores;

  constructor(private formBuilder: FormBuilder) {
    this.cities = [
      { name: 'Ciudad', code: '' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.iva = [
      { type: 'Condición IVA', code: '' },

      { type: 'Consumidor Final', code: '2' },
      { type: 'Exento', code: '2' },
    ];

    this.tipoDoc = [
      { type: 'Tipo Doc.', code: '' },

      { type: 'DNI' },
      { type: 'SIN IDENTIFICAR' },
    ];

    this.tipoProv = [
      { type: 'Tipo Prov', code: '' },

      { type: 'PRODUCTOS' },
      { type: 'SERVICIOS' },
    ];

    this.moneda = [
      { type: 'Moneda', code: '' },

      { type: 'PESOS' },
      { type: 'DOLAR' },
      { type: 'EURO' },
      { type: 'REAL' },
    ];

    this.grupos = [
      { type: 'Grupos', code: '' },

      { type: 'BATERIAS' },
      { type: 'EL POSITIVO' },
    ];

    this.retIib = [
      { type: 'Ret. Iib', code: '' },

      { type: 'EXENTO' },
      { type: 'INSCRIPTO EN CM' },
    ];
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      // primer columna
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      direction: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      webSite: new FormControl('', [Validators.required]),
      inoBruto: new FormControl('', [Validators.required]),
      // segunda columna
      iva: new FormControl('', [Validators.required]),
      tipoDoc: new FormControl('', [Validators.required]),
      doc: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      check: new FormControl('', [Validators.required]),
      tipoProv: new FormControl('', [Validators.required]),
      moneda: new FormControl('', [Validators.required]),
      alicRet: new FormControl('', [Validators.required]),
      stockVenta: new FormControl(''),
      fUltimaLista: new FormControl('', [Validators.required]),
      nroLista: new FormControl('', [Validators.required]),
      // tercer columna
      fantasia: new FormControl('', [Validators.required]),
      grupos: new FormControl('', [Validators.required]),
      retIib: new FormControl('', [Validators.required]),
      observaciones: new FormControl(''),
    });

    this.items = [
      {
        label: 'Sociedades',
        routerLink: '/clientes/cargar-cliente/sociedades',
      },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = {
      label: 'Datos Generales',
      routerLink: '/clientes/gestion-de-clientes/cargar-cliente',
    };
  }
}
