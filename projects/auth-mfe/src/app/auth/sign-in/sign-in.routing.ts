import { Route } from '@angular/router';
import { AuthSignInComponent } from 'projects/auth-mfe/src/app/auth/sign-in/sign-in.component';

export const authSignInRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignInComponent
    }
];
