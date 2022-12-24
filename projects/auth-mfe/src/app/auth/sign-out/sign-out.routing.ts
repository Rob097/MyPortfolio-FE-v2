import { Route } from '@angular/router';
import { AuthSignOutComponent } from 'projects/auth-mfe/src/app/auth/sign-out/sign-out.component';

export const authSignOutRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignOutComponent
    }
];
