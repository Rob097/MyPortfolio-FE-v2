import { Route } from '@angular/router';
import { AuthSignInComponent } from 'projects/fuse/src/app/modules/auth/sign-in/sign-in.component';

export const authSignInRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignInComponent
    }
];
