import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-proveedor',
  templateUrl: './modificar-proveedor.component.html',
  styleUrls: ['./modificar-proveedor.component.css'],
})
export class ModificarProveedorComponent implements OnInit {
  labels: any[];
  listados: any[];
  constructor() {
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
    ];
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
}
