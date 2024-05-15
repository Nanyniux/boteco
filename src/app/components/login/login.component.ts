import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MessageService } from 'primeng/api';
import { link } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
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
    private messageService: MessageService
  ) {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService
      .signIn(email, password)
      .then((response) => {
        if (response.user?.uid) {
          console.log(response.user?.uid);
          console.log('deu certo');
          localStorage.setItem('log', response.user?.uid as string);
          this.logado = response.user.uid;
        }
        // Login bem-sucedido, faça o que for necessário
      })
      .catch((error) => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warn',
          detail: 'Login incorreto',
        });

        console.log(error);
        // Trate os erros de login
      });
  }

  // emailts: string = '';
  // passwordts: string = '';

  logout() {
    localStorage.removeItem('log');
    this.logado = '';
  }
}
