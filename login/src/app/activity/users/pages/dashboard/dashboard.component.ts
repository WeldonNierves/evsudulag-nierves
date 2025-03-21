import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Total Sales', value: '$10,230', icon: 'shopping_cart' },
    { title: 'Orders', value: '342', icon: 'receipt' },
    { title: 'Customers', value: '1,220', icon: 'people' },
    { title: 'Products', value: '85', icon: 'inventory' }
  ];
}
