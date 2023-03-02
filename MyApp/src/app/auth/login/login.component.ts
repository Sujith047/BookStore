import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

form : LoginForm = {
  email:'',
  password:'',
};

constructor( private authservice : AuthService){}



submit() {
  //alert(this.form)

this.authservice.login(this.form)

}

isLoading(){
  return this.authservice.isLoading;
}

  ngOnInit(): void {
      
  }
}
