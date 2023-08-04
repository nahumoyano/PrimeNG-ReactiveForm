import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarProveedorComponent } from './proveedores/components/cargar-proveedor/cargar-proveedor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModificarProveedorComponent } from './proveedores/components/modificar-proveedor/modificar-proveedor.component';
import { CargarVentaComponent } from './ventas/components/cargar-venta/cargar-venta.component';

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
    path: 'ventas/gestion-de-ventas/presupuesto/cargar-presupuesto',
    component: CargarVentaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
