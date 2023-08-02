import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-top',
  templateUrl: './links-top.component.html',
  styleUrls: ['./links-top.component.css'],
})
export class LinksTopComponent implements OnInit {
  labels: any[];
  constructor() {}

  ngOnInit(): void {
    this.labels = [
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
  }
}
