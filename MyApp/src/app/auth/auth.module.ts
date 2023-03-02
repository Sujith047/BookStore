import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RigisterComponent } from './rigister/rigister.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RigisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
