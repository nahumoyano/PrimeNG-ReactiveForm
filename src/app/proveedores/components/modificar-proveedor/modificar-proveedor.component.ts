import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-modificar-proveedor',
  templateUrl: './modificar-proveedor.component.html',
  styleUrls: ['./modificar-proveedor.component.css'],
})
export class ModificarProveedorComponent implements OnInit {
  filterForm: FormGroup;

  @ViewChild('table') table: any;

  labels: any[];
  listados: any[];
  cities: any[];
  estados: any[];
  loading: boolean = true;
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      estadosControl: new FormControl(),
    });

    this.loading = true;

    setTimeout(() => {
      this.listados = [
        {
          num: 1,
          nombre: 'Danilo',
          cuit: 2133152978,
          telefono: 123456789,
          email: 'naku24@gmail.com',
          localidad: '',
          provincia: 'Misiones',
          tipo: '',
          fantasia: 'fantasia',
          estado: 'Habilitado',
        },
        {
          num: 2,
          nombre: 'Danilo',
          cuit: 2033152978,
          telefono: 323123123,
          email: 'naku@gmail.com',
          localidad: '',
          provincia: 'Córdoba',
          tipo: '',
          fantasia: 'fantasia',
          estado: 'Habilitado',
        },
        {
          num: 2,
          nombre: 'Danilo',
          cuit: 2033152978,
          telefono: 323123123,
          email: 'naku@gmail.com',
          localidad: '',
          provincia: 'Misiones',
          tipo: '',
          fantasia: 'fantasia',
          estado: 'Deshabilitado',
        },
        {
          num: 3,
          nombre: 'Juan',
          cuit: 2033152978,
          telefono: 323123123,
          email: 'naku@gmail.com',
          localidad: '',
          provincia: 'Misiones',
          tipo: '',
          fantasia: 'fantasia',
          estado: 'Deshabilitado',
        },
        {
          num: 4,
          nombre: 'Emiliano',
          cuit: 2033152978,
          telefono: 323123123,
          email: 'naku@gmail.com',
          localidad: '',
          provincia: 'Misiones',
          tipo: '',
          fantasia: 'realidad',
          estado: 'Deshabilitado',
        },
      ];

      this.cities = [
        { name: 'Ciudad', code: '' },
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ];

      this.estados = [{ estado: 'Habilitado' }, { estado: 'Deshabilitado' }];
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.labels = [
      {
        label: 'Proveedores',
      },
      {
        label: 'Gestión de Proveedores',
        icon: 'pi pi-chevron-right',
      },
      {
        label: 'Modificar Proveedores',
        icon: 'pi pi-chevron-right',
      },
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  filter() {
    const selectedEstado = this.filterForm.get('estadoControl')?.value;
    console.log(selectedEstado);
    if (selectedEstado) {
      this.table.filter(selectedEstado, 'estado', 'equals');
    } else {
      this.table.filter(null, 'estado', 'equals');
    }
  }
}
