import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CargarProveedorComponent } from './proveedores/components/cargar-proveedor/cargar-proveedor.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContactosComponent } from './proveedores/components/contactos/contactos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinksTopComponent } from './dashboard/components/links-top/links-top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarProveedorComponent } from './proveedores/components/modificar-proveedor/modificar-proveedor.component';
import { TableModule } from 'primeng/table';
import { CambiarColorEnabledPipe } from './proveedores/pipes/cambiar-color-enabled.pipe';
import { TagModule } from 'primeng/tag';
import { CargarVentaComponent } from './ventas/components/cargar-venta/cargar-venta.component';
import { CargarClienteComponent } from './clientes/components/cargar-cliente/cargar-cliente.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { SociedadesComponent } from './clientes/components/sociedades/sociedades.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ListadoClientesComponent } from './clientes/components/listado-clientes/listado-clientes.component';
import { LoginComponent } from './login/components/login/login.component';
import { CargarPagoALoteDeFacturaComponent } from './compras/components/cargar-pago-a-lote-de-factura/cargar-pago-a-lote-de-factura.component';
import { ModificarNotaDeCompraComponent } from './compras/components/modificar-nota-de-compra/modificar-nota-de-compra.component';
import { RemitoInternoComponent } from './stock/components/remito-interno/remito-interno.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CargarProveedorComponent,
    ContactosComponent,
    DashboardComponent,
    LinksTopComponent,
    ModificarProveedorComponent,
    CambiarColorEnabledPipe,
    CargarVentaComponent,
    CargarClienteComponent,
    ClientesComponent,
    SociedadesComponent,
    BreadcrumbComponent,
    ListadoClientesComponent,
    LoginComponent,
    CargarPagoALoteDeFacturaComponent,
    ModificarNotaDeCompraComponent,
    RemitoInternoComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    PanelMenuModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    TreeSelectModule,
    InputTextareaModule,
    SidebarModule,
    ReactiveFormsModule,
    ToastModule,
    TableModule,
    MultiSelectModule,
    TagModule,
    BreadcrumbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
