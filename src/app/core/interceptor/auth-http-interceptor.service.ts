/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import cookies from 'js-cookie';

export const AuthHttpInterceptorService: HttpInterceptorFn =
    (req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {
        const token = cookies.get('accessToken');
        const newReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token),
        });
        console.log(req)
        return next(newReq);
    }
