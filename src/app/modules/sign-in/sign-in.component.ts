/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginMdeol } from '../../interfaces/login-detail';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { MemberLoginService } from './member-login.service';
import Cookies from 'js-cookie'

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [NgFor, NgIf, CommonModule, FormsModule, RouterLink, CreateAccountComponent],
    templateUrl: './sign-in.component.html',
    styleUrls: [
        './sign-in.component.css',
        '../../../assets/vendor/bootstrap/css/bootstrap.min.css'
    ],
})
export class SignInComponent implements OnInit, AfterViewInit {
    private loginService = inject(MemberLoginService);
    errorMessage: string = '';

    private cookie = Cookies;

    constructor(private router: Router) { }

    ngOnInit(): void {
        console.log(this.cookie.get('accessToken'));
    }

    ngAfterViewInit(): void { }

    onSubmit(formData: any) {
        this.loginService.userSign(formData).subscribe({
            next: (res: any) => {
                this.cookie.set('accessToken', res.data.accessToken, { expires: 365 });
                this.cookie.set('refreshToken', res.data.accessToken, { expires: 365 });
                this.router.navigate(['/']);
            },
            error: (error: HttpErrorResponse) => {
                console.error(error.message);
                this.errorMessage = '帳號或密碼錯誤';
            },
        });
    }
}
