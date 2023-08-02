import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
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
  providers: [MessageService],
})
export class CargarProveedorComponent implements OnInit {
  formulario: FormGroup;

  items: MenuItem[];
  labels: MenuItem[];
  nodes: any[];
  cities: Proveedores[];
  iva: Iva[];
  tipoDoc: any[];
  tipoProv: any[];
  moneda: any[];
  grupos: any[];
  retIib: any[];
  selectedCity: Proveedores;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
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

  show() {
    if (this.formulario.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Guardado!',
        detail: 'Los datos se han guardado con éxito',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: '¡ERROR!',
        detail:
          'Ha ocurrido un error, verifique los campos he intente nuevamente',
      });
    }
  }
}
