import { Route } from '@angular/router';
import { AuthConfirmationRequiredComponent } from 'projects/auth-mfe/src/app/auth/confirmation-required/confirmation-required.component';

export const authConfirmationRequiredRoutes: Route[] = [
    {
        path     : '',
        component: AuthConfirmationRequiredComponent
    }
];
