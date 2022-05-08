import {Injectable} from '@angular/core';
import {FacebookAuthProvider} from "firebase/auth";
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {MessageService} from "primeng/api";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(public auth: AngularFireAuth, public router: Router, public afs: AngularFirestore, private messageService: MessageService, public firestore: Firestore) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  FacebookAuth() {
    this.messageService.add({severity: 'success', summary: 'authentication', detail: 'successfully logged in'});
    return this.auth.signInWithPopup(new FacebookAuthProvider())
      .then((res) => {
        console.log(res);
        if (!res.user?.emailVerified) this.SendVerificationMail();
        this.SetUserData(res.user);
        this.router.navigate(['feed'])
          .then(() => window.location.reload());
      }, (err) => {
        alert(err.message);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  get emailVerified() {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log('email: ' + user.emailVerified)
    return user.emailVerified
  }

  SendVerificationMail() {
    return this.auth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login'])
        .then(() => window.location.reload());
    });
  }

  getUsers() {
    const collections = collection(this.firestore, 'users');
    return collectionData(collections);
  }
}
