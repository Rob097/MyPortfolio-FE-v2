import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from 'libs/fuse-lib/src/lib/components/card';
import { SharedModule } from 'libs/common-lib/src/lib/shared.module';
import { AuthConfirmationRequiredComponent } from 'projects/auth-mfe/src/app/auth/confirmation-required/confirmation-required.component';
import { authConfirmationRequiredRoutes } from 'projects/auth-mfe/src/app/auth/confirmation-required/confirmation-required.routing';

@NgModule({
    declarations: [
        AuthConfirmationRequiredComponent
    ],
    imports     : [
        RouterModule.forChild(authConfirmationRequiredRoutes),
        MatButtonModule,
        FuseCardModule,
        SharedModule
    ]
})
export class AuthConfirmationRequiredModule
{
}
