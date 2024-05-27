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

  barName = environment.barName

  list = [
    { nome: `Produtos`, routerLink: '', icon:'width_full' },
    { nome: `Estoque`, routerLink: '/stock', icon:'event_list' },
    { nome: `Usuários`, routerLink: '', icon:'progress_activity' },
    { nome: `Histórico`, routerLink: '', icon:'swipe_left_alt' },
    { nome: `Mesas`, routerLink: '/tables', icon:'keyboard_option_key' },
    { nome: `Pedidos`, routerLink: '', icon:'' },
    { nome: `Gorjetas`, routerLink: '', icon:'' },
  ];
}
