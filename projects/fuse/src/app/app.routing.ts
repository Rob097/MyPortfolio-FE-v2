import { Route } from '@angular/router';
import { LayoutComponent } from 'projects/fuse/src/app/layout/layout.component';
import { InitialDataResolver } from 'projects/fuse/src/app/app.resolvers';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AuthGuard } from 'second-lib';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes
    {
        path: 'auth',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'auth-mfe',
            exposedModule: './Module'
          })
          .then(m => m.AuthModule)
    },


    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('projects/fuse/src/app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('projects/fuse/src/app/modules/admin/example/example.module').then(m => m.ExampleModule)},
        ]
    }
];
