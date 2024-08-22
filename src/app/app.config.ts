import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthHttpInterceptorService } from './core/interceptor/auth-http-interceptor.service';
import { BackHttpInterceptorServiceService } from './core/interceptor/back-http-interceptor.service.service';
import { ApiService } from './core/api/ApiService.service';

export const routes: Routes = [
    //{ path: 'AppComponent', component: AppComponent },
    { path: 'sign-in', title: '登入 - Jacmazon 帳戶', component: SignInComponent },
    { path: 'create-account', title: '註冊 - Jacmazon 帳戶', component: CreateAccountComponent },
    { path: 'page-not-found', title: '首頁', component: HomeComponent },
    { path: '', loadChildren: () => import('./modules/home/home.router.config').then(m => m.homeRouter) },
    { path: '**', title: '查無此頁面', component: PageNotFoundComponent },
];

export const appConfig: ApplicationConfig = {
    providers: [
        // 攔截器-api回來檢查是否有錯誤
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BackHttpInterceptorServiceService,
            multi: true,
        },
        ApiService,
        provideClientHydration(),
        provideAnimations(),
        provideRouter(routes),
        provideHttpClient(withFetch(), withInterceptors([
            AuthHttpInterceptorService
        ])),
    ],
};
