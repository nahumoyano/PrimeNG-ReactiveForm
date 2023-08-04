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
      // dashboard
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard',
        styleClass: 'custom-menu-item',
      },
      // clientes
      {
        label: 'Clientes',
        icon: 'pi pi-user-edit',
        items: [
          {
            label: 'Gestión de Clientes',

            items: [
              {
                label: 'Cargar Cliente',
                icon: 'pi pi-user',
                routerLink: '/clientes/gestion-de-clientes/cargar-cliente',
              },
              {
                label: 'Modificar Proveedor',
                icon: 'pi pi-user',
              },
              { label: 'Eliminar Proveedor', icon: 'pi pi-user' },
            ],
          },
        ],
      },
      // proveedores
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
              {
                label: 'Modificar Proveedor',
                icon: 'pi pi-user',
                routerLink: '/proveedores/modificar-proveedor',
              },
              { label: 'Eliminar Proveedor', icon: 'pi pi-user' },
            ],
          },
        ],
      },

      // ventas
      {
        label: 'Ventas',
        icon: 'pi pi-user-edit',
        routerLink: '/ventas/gestion-de-ventas/presupuestos/cargar-venta',
      },
    ];
  }
}
