import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  logado = localStorage.getItem('log') || '';

  constructor(private authService: ServiceService) {}

  ngOnInit(): void {}

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
        // Trate os erros de login
      });
  }

  logout() {
    localStorage.removeItem('log');
    this.logado = '';
  }
}
