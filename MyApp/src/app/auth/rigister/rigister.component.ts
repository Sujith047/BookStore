import { Component } from '@angular/core';
import { LoginForm, RigisterForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent {
  form : RigisterForm = {
    email:'',
    password:'',
    confirm_password:'',
  };
  
constructor(private authservice : AuthService) {}

  
  
// isLoading : boolean = false;

submit() {
  //alert(this.form)
this.authservice.register(this.form)

  }

isLoading() {
  return this.authservice.isLoading;
}

}
