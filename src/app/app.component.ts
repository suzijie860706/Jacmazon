import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgFor, NgIf, SignInComponent, RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { }
