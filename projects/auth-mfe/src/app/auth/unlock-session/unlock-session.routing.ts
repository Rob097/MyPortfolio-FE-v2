import { Route } from '@angular/router';
import { AuthUnlockSessionComponent } from 'projects/auth-mfe/src/app/auth/unlock-session/unlock-session.component';

export const authUnlockSessionRoutes: Route[] = [
    {
        path     : '',
        component: AuthUnlockSessionComponent
    }
];
