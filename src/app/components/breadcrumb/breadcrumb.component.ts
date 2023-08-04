import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: { label: string; url: string }[] = [];
  items: MenuItem[];

  home: MenuItem;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    //   }
    // });
    this.items = [
      { label: 'Sociedad', routerLink: '/sociedades' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = { label: 'Dtos personaes', routerLink: '/cargar-cliente' };
  }

  // private createBreadcrumbs(
  //   route: ActivatedRoute,
  //   url: string = '',
  //   breadcrumbs: { label: string; url: string }[] = []
  // ): { label: string; url: string }[] {
  //   const children: ActivatedRoute[] = route.children;

  //   if (children.length === 0) {
  //     return breadcrumbs;
  //   }

  //   for (const child of children) {
  //     const routeURL: string = child.snapshot.url
  //       .map((segment) => segment.path)
  //       .join('/');
  //     if (routeURL !== '') {
  //       url += `/${routeURL}`;
  //     }

  //     const breadcrumbLabel = child.snapshot.data['breadcrumb']; // Use indexing here
  //     breadcrumbs.push({ label: breadcrumbLabel, url: url });
  //     return this.createBreadcrumbs(child, url, breadcrumbs);
  //   }
  //   return breadcrumbs;
  // }
}
