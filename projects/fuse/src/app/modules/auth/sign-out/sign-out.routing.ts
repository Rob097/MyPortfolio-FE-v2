import { Route } from '@angular/router';
import { AuthSignOutComponent } from 'projects/fuse/src/app/modules/auth/sign-out/sign-out.component';

export const authSignOutRoutes: Route[] = [
    {
        path     : '',
        component: AuthSignOutComponent
    }
];
