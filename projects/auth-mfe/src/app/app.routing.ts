import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [

    {
        path: '',
        children: [
            {path: 'auth', loadChildren: () => import('projects/auth-mfe/src/app/auth/auth.module').then(m => m.AuthModule)}
        ]
    }

];
