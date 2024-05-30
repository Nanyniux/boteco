import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrl: './waiter.component.scss',
})
export class WaiterComponent {
  barName = environment.barName;
  pedidosProntos = '2';

  list = [
    { nome: `Novo Pedido`, routerLink: '/', icon: 'add_circle' },
    { nome: `Mesas`, routerLink: '/tables', icon: 'table_restaurant' },
    { nome: `Cardápio`, routerLink: '/menu-card', icon: 'restaurant_menu' },
    { nome: `Pedidos`, routerLink: '', icon: 'receipt_long' },
    { nome: `Gorjetas`, routerLink: '/tables', icon: 'attach_money' },
  ];
}
