/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/api/ApiService.service';

@Injectable({
    providedIn: 'root',
})
export class MemberLoginService {
    private apiService = inject(ApiService);
    constructor() { }

    /**
     * 登入
     * @param data
     * @returns
     */
    userSign(data: any): Observable<any> {
        return this.apiService.post('Login', data);
    }

    /**
     * 建立帳戶
     * @param data
     * @returns
     */
    createAccount(data: any): Observable<any> {
        return this.apiService.post('CreateAccount', data);
    }

    /**
     * 產品列表
     * @param data
     * @returns
     */
    productList(): Observable<any> {
        return this.apiService.get('ProductList');
    }

    /**
     * 產品列表
     * @param data
     * @returns
     */
    getRefreshToken(param: any): Observable<any> {
        return this.apiService.post('Refresh_Token', param);
    }
}
