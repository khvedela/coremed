import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {collection, Firestore, getDocs, getFirestore,} from "@angular/fire/firestore";
import {Auth, signInWithEmailAndPassword, getAuth, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  db = getFirestore();

  constructor(private authFire: Auth, private firestore: Firestore, private route: Router) { }

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(this.authFire, email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
        this.route.navigate(['']);
      })
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('state');
      this.route.navigate(['login']);
    })
  }
}
