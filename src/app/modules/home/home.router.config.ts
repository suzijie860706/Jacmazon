
import { SignInComponent } from '../sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRouter: Routes = [
  { path: '', component: HomeComponent },
  { path: 'asign-in', title: '登入 - Jacmazon 帳戶', component: SignInComponent }
];