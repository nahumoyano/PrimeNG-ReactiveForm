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
        label: 'Opciones',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Opción 1',
            icon: 'pi pi-file',
            routerLink: '/opcion1',
          },
          {
            label: 'Opción 2',
            icon: 'pi pi-file',
            routerLink: '/opcion2',
          },
          {
            label: 'Opción 3',
            icon: 'pi pi-file',
            routerLink: '/opcion3',
          },
        ],
      },
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Cargar proveedor',
        icon: 'pi pi-plus',
        routerLink: '/proveedores/cargar-proveedor',
      },
    ];
  }
}
