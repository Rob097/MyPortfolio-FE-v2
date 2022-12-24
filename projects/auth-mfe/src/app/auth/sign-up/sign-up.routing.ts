import { Route } from '@angular/router';
import { AuthSignUpComponent } from 'projects/auth-mfe/src/app/auth/sign-up/sign-up.component';

export const authSignupRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignUpComponent
    }
];
