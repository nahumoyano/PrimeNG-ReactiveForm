import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MessageService],
})
export class ClientesComponent implements OnInit {
  formulario: FormGroup;

  items: MenuItem[];
  labels: MenuItem[];
  home: MenuItem;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sociedades',
        routerLink: '/clientes/cargar-cliente/sociedades',
      },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = {
      label: 'Datos Generales',
      routerLink: '/clientes/gestion-de-clientes/cargar-cliente',
    };

    this.labels = [
      {
        label: 'Clientes',
      },
      {
        label: 'Gestión de Clientes',
        icon: 'pi pi-chevron-right',
      },
      {
        label: 'Cargar Clientes',
        icon: 'pi pi-chevron-right',
      },
    ];
  }

  show() {
    if (this.formulario.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Guardado!',
        detail: 'Los datos se han guardado con éxito',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: '¡ERROR!',
        detail:
          'Ha ocurrido un error, verifique los campos he intente nuevamente',
      });
    }
  }
}
