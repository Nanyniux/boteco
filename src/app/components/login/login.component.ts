import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { link } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  person: any;
  logado = localStorage.getItem('log') || '';
  msg = '';
  objs = [
    { nome: ' ', link: '/casa' },
    { nome: ' novo pedido', link: '/novo-pedido' },
    { nome: ' apagar pedido', link: '/apagar-pedido' },
  ];

  constructor(
    private authService: ServiceService,
  ) {}

  onSubmit(form: NgForm) {

  }

  // emailts: string = '';
  // passwordts: string = '';

  logout() {
    localStorage.removeItem('log');
    this.logado = '';
  }
}
