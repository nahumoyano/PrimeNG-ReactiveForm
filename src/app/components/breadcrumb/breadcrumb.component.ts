import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumService } from 'src/app/common/services/breadcrum.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  crumbs$: any;
  private items: MenuItem[];
  home: MenuItem;
  constructor(private breadcrumbservice: BreadcrumService) {}

  ngOnInit(): void {
    this.crumbs$ = this.breadcrumbservice.crumbs$;
  }
}
