import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'projects/fuse/src/app/core/auth/auth.service';
import { AuthInterceptor } from 'projects/fuse/src/app/core/auth/auth.interceptor';

@NgModule({
    imports  : [
        HttpClientModule
    ],
    providers: [
        AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        }
    ]
})
export class AuthModule
{
}
