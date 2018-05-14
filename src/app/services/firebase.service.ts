import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LoginInfo } from '../components/auth/signup';

// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

@Injectable()
export class FirebaseService {

  private app: any;

  constructor(public afAuth: AngularFireAuth) {
    // this.app = firebase.initializeApp({
    //   apiKey: 'AIzaSyBhE9Wjsg7rxbJIxVrTpdq10FdS_I7eW6o'
    //   , authDomain: 'fudefafa-191420.firebaseapp.com'
    //   , databaseURL: 'https://fudefafa-191420.firebaseio.com'
    //   , storageBucket: 'fudefafa-191420.appspot.com'
    //   , messagingSenderId: '813026987388'
    // });
   }

  public doSignUp(user: LoginInfo): any {// Observable<Us {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
}
