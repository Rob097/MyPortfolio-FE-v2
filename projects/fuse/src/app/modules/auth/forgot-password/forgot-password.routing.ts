import { Route } from '@angular/router';
import { AuthForgotPasswordComponent } from 'projects/fuse/src/app/modules/auth/forgot-password/forgot-password.component';

export const authForgotPasswordRoutes: Route[] = [
    {
        path     : '',
        component: AuthForgotPasswordComponent
    }
];
