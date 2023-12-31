import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cargar-venta',
  templateUrl: './cargar-venta.component.html',
  styleUrls: ['./cargar-venta.component.css'],
  providers: [MessageService],
})
export class CargarVentaComponent implements OnInit {
  formulario: FormGroup;

  labels: any[];
  items: any[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Proveedores',
      },
      {
        label: 'Datos Bancarios',
      },
      {
        label: 'Descuentos y Premios',
      },
      {
        label: 'Información de Pago',
      },
    ];

    this.labels = [
      {
        label: 'Proveedores',
      },
      {
        label: 'Gestión de Proveedores',
        icon: 'pi pi-chevron-right',
      },
      {
        label: 'Cargar Proveedores',
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
