import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RigisterForm } from '../types/auth';
//import { getAuth, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isAuthenticated : boolean = false;

  isLoading : boolean = false;

  passwordMatched : boolean = false;

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
signInWithEmailAndPassword(auth, form.email,form.password)
  .then((userCredential) => {
    // Signed in 
    //const user = userCredential.user;
    this.isAuthenticated = true;
    this.router.navigate(['']);
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('credential does not match our records')
  })
  .finally(() => (this.isLoading = false));
  }

  register(form:RigisterForm){
    this.isLoading = true;

    if(form.password !== form.confirm_password){
      this.passwordMatched = false;
      return
    }

    const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
  this.isAuthenticated = true;
    
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    this.isAuthenticated = false;
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  .finally(() => (this.isLoading= false));
  }

  logout(){
   

const auth = getAuth();
signOut(auth)
.then(() => {
  this.router.navigate(['login']);
  this.isAuthenticated = false;
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
 
}
