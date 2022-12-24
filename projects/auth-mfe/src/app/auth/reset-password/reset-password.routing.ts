import { Route } from '@angular/router';
import { AuthResetPasswordComponent } from 'projects/auth-mfe/src/app/auth/reset-password/reset-password.component';

export const authResetPasswordRoutes: Route[] = [
    {
        path     : '',
        component: AuthResetPasswordComponent
    }
];
