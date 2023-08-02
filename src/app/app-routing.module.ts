import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarProveedorComponent } from './proveedores/components/cargar-proveedor/cargar-proveedor.component';

const routes: Routes = [
  { path: 'proveedores/cargar-proveedor', component: CargarProveedorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
