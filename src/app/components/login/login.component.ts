import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { link } from 'fs';
import {
  FormControl,
  FormGroupDirective,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserDataService } from '../../services/user-data.service';

import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { environment } from '../../../environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;

  emailFormControl: any = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl();

  person: any;

  msg = '';
  barName = environment.barName;
  barLogo = environment.barLogo;
  objs = [
    { nome: ' ', link: '/casa' },
    { nome: ' novo pedido', link: '/novo-pedido' },
    { nome: ' apagar pedido', link: '/apagar-pedido' },
  ];

  constructor(private userData: UserDataService, private router: Router, private _snackBar: MatSnackBar) {}

  async login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}`))
          .then((snapshot) => {
            if (!snapshot.exists()) {
              this.writeUserData(user.uid, user.email);
              this.msg = 'Aguarde até que o administrador atribua uma função ao seu usuário'
              setTimeout(() => {
                this.msg = ''

              }, 4000);

            } else {

              this._snackBar.open("✅ Login efetuado! ✅", "Fechar" , { duration: 2000});

              const userDados = snapshot.val();
              if (userDados.privileges == 'blocked') {
                this.msg = 'O administrador ainda não atribuiu uma função ao seu usuário'
                setTimeout(() => {
                  this.msg = ''

                }, 4000);
                this.logout();
              }

              if (userDados.privileges == 'admin') {
                this.router.navigate(['adm']);
              }

              if (userDados.privileges == 'garcom') {
                this.router.navigate(['waiter']);
              }

              if (userDados.privileges == 'cozinha') {
                this.router.navigate(['kitchen']);
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.msg = '* Confira suas credenciais de e-mail e senha.'
        this._snackBar.open("🚫 Acesso Negado 🚫", "Fechar", { duration: 2000});
        setTimeout(() => {
          this.msg = ''

        }, 4000);
      });
  }

  logout() {}

  async writeUserData(userId: string, email: any) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      email: email,
      profile_picture: environment.barLogo,
      privileges: 'blocked',
    });
  }
}
