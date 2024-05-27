import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref, set, child, get } from "firebase/database";


@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private router: Router) {}



  async logout() {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }







}
