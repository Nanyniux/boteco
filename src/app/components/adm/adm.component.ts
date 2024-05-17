import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.scss',
})
export class AdmComponent {
  constructor(private router: Router) {}

  list = [
    { nome: `Produtos`, routerLink: '' },
    { nome: `Estoque`, routerLink: '/stock' },
    { nome: `Usuários`, routerLink: '' },
    { nome: `Histórico`, routerLink: '' },
    { nome: `Mesas`, routerLink: '/tables' },
    { nome: `Pedidos`, routerLink: '' },
    { nome: `Gorjetas`, routerLink: '' },
  ];
}
