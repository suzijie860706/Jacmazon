import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { nextTick } from 'process';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private productsService = inject(ProductsService);

  Test() {
    this.productsService.GetProductList().subscribe({
      next: (res: any) => {
        //token 失效
        if (res.Status == '401' && res.Message == 'Access token has expired. Please refresh your token.') {
          this.productsService.RefreshToken().subscribe({
            next: (res2: any) => {
              //重新發送
              localStorage.setItem('accessToken', res2.data);
              this.productsService.GetProductList().subscribe({
                next: (res3: any) => {
                  console.log('res3', res3);
                },
              });
            },
          });
        }
        console.log('res', res);
      },
      error: (error: HttpErrorResponse) => {
        console.log('Errrrrr');
        console.error(error.message);
      },
    });
  }
}
