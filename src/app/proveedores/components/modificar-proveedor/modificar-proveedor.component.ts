import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-modificar-proveedor',
  templateUrl: './modificar-proveedor.component.html',
  styleUrls: ['./modificar-proveedor.component.css'],
})
export class ModificarProveedorComponent implements OnInit {
  labels: any[];
  listados: any[];
  cities: any[];

  loading: boolean = true;

  constructor() {
    this.loading = true;

    setTimeout(() => {
      this.listados = [
        {
          num: 1,
          nombre: 'Danilo',
          cuit: 2033152978,
          telefono: 323123123,
          email: 'naku@gmail.com',
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
      ];

      this.cities = [
        { name: 'Ciudad', code: '' },
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ];

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
}
