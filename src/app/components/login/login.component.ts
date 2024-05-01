import { Component } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
<<<<<<< HEAD
  emailts: string = '';
  passwordts: string = '';

  login(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
=======

date: any


saveDate(){

localStorage.setItem('Data de teste', this.date)

}

removeDate(){
  localStorage.removeItem('Data de teste')
}


>>>>>>> 7534dbe (v 0.4)
}
