import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RigisterComponent } from './auth/rigister/rigister.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: "", 
    component: BooksComponent
  },
  {
    path:"cart",
    component:CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RigisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
