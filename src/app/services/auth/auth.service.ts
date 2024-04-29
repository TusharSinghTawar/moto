import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afs: AngularFireAuth) {}
  islogged: boolean = false;

  signInWithGoogle() {
    this.islogged = true;
    return this.afs.signInWithPopup(new GoogleAuthProvider());
  }
  signInWithFB(){
    this.islogged=true;
    return this.afs.signInWithPopup(new FacebookAuthProvider());
  }
  signInWithTwitter(){
    this.islogged=true;
    return this.afs.signInWithPopup(new TwitterAuthProvider);
  }
  registerWithEmailAndPassword(email: string, password: string) {
    return this.afs.createUserWithEmailAndPassword(email, password);
  }
  signInwithEmailAndPassword(email: string, password: string) {
    this.islogged = true;
    return this.afs.signInWithEmailAndPassword(email, password);
  }

  signout() {
    this.islogged = false;
    return this.afs.signOut();
  }
  isloggedIn() {
    return this.islogged;
  }
}
