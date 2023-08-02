import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  items: any[];
  labels: any[];

  constructor() {}

  ngOnInit(): void {
    this.items = [{ label: 'Dashboard' }];
  }
}
