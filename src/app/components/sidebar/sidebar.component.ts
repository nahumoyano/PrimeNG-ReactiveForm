import { Component, OnInit } from '@angular/core';

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
      // compras
      {
        label: 'Compras',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
      // Stock
      {
        label: 'Stock',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
      // caja y bancos
      {
        label: 'Caja y Bancos',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
      // Contabilidad
      {
        label: 'Contabilidad',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
      // Ecommerce
      {
        label: 'Ecommerce',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
      // Herramientas
      {
        label: 'Herramientas',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
      // WMS
      {
        label: 'WMS',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'Gestión de Compras',

            items: [
              {
                label: 'Nota de Compra',
                items: [
                  { label: 'Cargar Nota de Compra Por Proveedor' },
                  { label: 'Modsificar Nota de Compra' },
                ],
              },
              {
                label: 'Recibo de Compra',
                routerLink: '/proveedores/modificar-proveedor',
              },
              {
                label: 'pagos',
                items: [{ label: 'Cargar Pago a Lote de Facturas' }],
              },
            ],
          },
          {
            label: 'Informes de Compras',
            items: [{ label: 'Informe de Cta. Cte. proveedor' }],
          },
        ],
      },
    ];
  }
}
