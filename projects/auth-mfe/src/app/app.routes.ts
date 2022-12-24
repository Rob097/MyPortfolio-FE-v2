import { Routes } from '@angular/router';
import { AuthGuard } from 'libs/auth-lib/src/lib/guards/auth.guard';
import { NoAuthGuard } from 'libs/auth-lib/src/lib/guards/noAuth.guard';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},

    // Auth routes for guests
    {
        path: 'auth',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: HomeComponent,
        children: [
            // eslint-disable-next-line max-len
            {path: 'confirmation-required', loadChildren: () => import('projects/auth-mfe/src/app/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('projects/auth-mfe/src/app/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('projects/auth-mfe/src/app/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('projects/auth-mfe/src/app/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('projects/auth-mfe/src/app/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    {
        path: 'auth',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: HomeComponent,
        children: [
            {path: 'sign-out', loadChildren: () => import('projects/auth-mfe/src/app/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('projects/auth-mfe/src/app/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

];
