import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarProveedorComponent } from './proveedores/components/cargar-proveedor/cargar-proveedor.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // dashboard
  { path: 'dashboard', component: DashboardComponent },
  // proveedores
  { path: 'proveedores/cargar-proveedor', component: CargarProveedorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
