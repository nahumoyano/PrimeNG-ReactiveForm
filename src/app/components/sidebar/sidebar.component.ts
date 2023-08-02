import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard',
        styleClass: 'custom-menu-item',
      },
      {
        label: 'Clientes',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Gestión de Clientes',

            items: [
              { label: 'Cargar Clientes', icon: 'pi pi-user' },
              { label: 'Modificar Clientes', icon: 'pi pi-user' },
              { label: 'Eliminar Clientes', icon: 'pi pi-user' },
            ],
          },
        ],
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-user-edit',
        items: [
          {
            label: 'Gestión de Proveedores',

            items: [
              {
                label: 'Cargar Proveedor',
                icon: 'pi pi-user',
                routerLink: '/proveedores/cargar-proveedor',
              },
              { label: 'Modificar Proveedor', icon: 'pi pi-user' },
              { label: 'Eliminar Proveedor', icon: 'pi pi-user' },
            ],
          },
        ],
      },
    ];
  }
}
