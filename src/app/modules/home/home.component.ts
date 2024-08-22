import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MemberLoginService } from '../sign-in/member-login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    constructor(private memberLoginService: MemberLoginService) { }

    ngOnInit(): void {
        this.productList();
    }

    productList() {
        this.memberLoginService.productList().subscribe({
            next: (res: any) => {
                console.log(res)
            },
            error: (error: HttpErrorResponse) => {
                console.error(error.message);
            },
        });
    }
}
