/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    // restful get
    get(url: string, params?: any): Observable<any> {

        if (params) {
            const newParams = new URLSearchParams();

            for (const key in params) {
                if (Object.prototype.hasOwnProperty.call(params, key)) {
                    newParams.append(key, params[key]);
                }
            }

            return this.http.get(`${this.baseApiUrl}/${url}?${newParams.toString()}`);
        }

        return this.http.get(`${this.baseApiUrl}/${url}`);
    }

    // restful post
    post(url: string, data: any): Observable<any> {
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        };

        return this.http.post(`${this.baseApiUrl}/${url}`, data, options);
    }

    // restful put
    put(url: string, data: any): Observable<any> {
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        };

        return this.http.put(`${this.baseApiUrl}/${url}`, data, options);
    }
}