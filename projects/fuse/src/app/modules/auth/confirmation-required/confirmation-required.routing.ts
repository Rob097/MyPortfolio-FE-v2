import { Route } from '@angular/router';
import { AuthConfirmationRequiredComponent } from 'projects/fuse/src/app/modules/auth/confirmation-required/confirmation-required.component';

export const authConfirmationRequiredRoutes: Route[] = [
    {
        path     : '',
        component: AuthConfirmationRequiredComponent
    }
];
