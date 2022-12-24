import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from 'libs/fuse-lib/src/lib/components/card';
import { SharedModule } from 'libs/common-lib/src/lib/shared.module';
import { AuthSignOutComponent } from 'projects/auth-mfe/src/app/auth/sign-out/sign-out.component';
import { authSignOutRoutes } from 'projects/auth-mfe/src/app/auth/sign-out/sign-out.routing';

@NgModule({
    declarations: [
        AuthSignOutComponent
    ],
    imports     : [
        RouterModule.forChild(authSignOutRoutes),
        MatButtonModule,
        FuseCardModule,
        SharedModule
    ]
})
export class AuthSignOutModule
{
}
