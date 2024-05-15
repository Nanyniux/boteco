import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]

})
<<<<<<< HEAD
export class LoginComponent implements OnInit {
  logado = localStorage.getItem('log') || '';
=======
export class LoginComponent {
  person: any;
  logado = localStorage.getItem('log') || ''
  msg = ''

  constructor(private authService: ServiceService, private messageService: MessageService) {}

>>>>>>> 1e85c7d74edb4cc8250419a8aaa279f51eefcd3d


<<<<<<< HEAD
  ngOnInit(): void {}
=======
>>>>>>> 1e85c7d74edb4cc8250419a8aaa279f51eefcd3d

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

        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Login incorreto' });


        console.log(error)
        // Trate os erros de login
      });
  }

  logout() {
    localStorage.removeItem('log');
    this.logado = '';
  }
}
