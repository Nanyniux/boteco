import { Component, OnInit } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]

})
export class LoginComponent {
  person: any;
  logado = localStorage.getItem('log') || ''
  msg = ''

  constructor(private authService: ServiceService, private messageService: MessageService) {}




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
          this.logado = response.user.uid

        }
        // Login bem-sucedido, faça o que for necessário
      })
      .catch((error) => {

        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Login incorreto' });


        console.log(error)
        // Trate os erros de login
      });
  }
  // emailts: string = '';
  // passwordts: string = '';
  // login(email: string, password: string) {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // }

  logout(){
    localStorage.removeItem('log')
    this.logado = ''
  }
}
