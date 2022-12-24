import { Route } from '@angular/router';
import { AuthForgotPasswordComponent } from 'projects/auth-mfe/src/app/auth/forgot-password/forgot-password.component';

export const authForgotPasswordRoutes: Route[] = [
    {
        path     : '',
        component: AuthForgotPasswordComponent
    }
];
