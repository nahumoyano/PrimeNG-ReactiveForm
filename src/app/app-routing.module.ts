import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarProveedorComponent } from './proveedores/components/cargar-proveedor/cargar-proveedor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModificarProveedorComponent } from './proveedores/components/modificar-proveedor/modificar-proveedor.component';
import { CargarVentaComponent } from './ventas/components/cargar-venta/cargar-venta.component';
import { CargarClienteComponent } from './clientes/components/cargar-cliente/cargar-cliente.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { SociedadesComponent } from './clientes/components/sociedades/sociedades.component';

const routes: Routes = [
  // dashboard
  { path: 'dashboard', component: DashboardComponent },
  // proveedores
  { path: 'proveedores/cargar-proveedor', component: CargarProveedorComponent },
  {
    path: 'proveedores/modificar-proveedor',
    component: ModificarProveedorComponent,
  },
  // ventas
  {
    path: 'ventas/gestion-de-ventas/presupuestos/cargar-venta',
    component: CargarVentaComponent,
  },
  // clientes
  { path: 'clientes', component: ClientesComponent },
  {
    path: 'clientes/gestion-de-clientes/cargar-cliente',
    component: CargarClienteComponent,
    // children: [
    //   {
    //     path: 'datos-generales',
    //     component: DatosGeneralesComponent,
    //     data: { breadcrumb: 'Datos Generales' },
    //   },
    //   {
    //     path: 'sociedades',
    //     component: SociedadesComponent,
    //     data: { breadcrumb: 'Sociedades' },
    //   },
    //   // Otras subrutas aquí
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
