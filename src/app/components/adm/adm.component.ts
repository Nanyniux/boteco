import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.scss',
})
export class AdmComponent {
  constructor(private router: Router) {}

  barName = environment.barName;

  list = [
    { nome: `Produtos`, routerLink: '', icon: 'lists' },
    { nome: `Estoque`, routerLink: '/stock', icon: 'inventory' },
    { nome: `Usuários`, routerLink: '', icon: 'person' },
    { nome: `Histórico`, routerLink: '', icon: 'cloud_done' },
    { nome: `Mesas`, routerLink: '/tables', icon: 'table_restaurant' },
    { nome: `Pedidos`, routerLink: '', icon: 'summarize' },
    { nome: `Gorjetas`, routerLink: '', icon: 'attach_money' },
  ];
}
