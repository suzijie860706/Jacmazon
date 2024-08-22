/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, Input, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MemberLoginService } from '../sign-in/member-login.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrls: [
    './create-account.component.css',
    '../../../assets/vendor/bootstrap/css/bootstrap.min.css'
  ],
})
export class CreateAccountComponent implements OnInit {
  private loginService = inject(MemberLoginService);
  errorMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  //帳號檢查
  @Input() emailCheck = true;

  onSubmit(data: any) {
    this.loginService.createAccount(data).subscribe({
      next: () => {
        this.router.navigate(['/sign-in']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }
}
