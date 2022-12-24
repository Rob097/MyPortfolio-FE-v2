import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from 'libs/fuse-lib/src/lib/components/card';
import { FuseAlertModule } from 'libs/fuse-lib/src/lib/components/alert';
import { SharedModule } from 'libs/common-lib/src/lib/shared.module';
import { AuthResetPasswordComponent } from 'projects/auth-mfe/src/app/auth/reset-password/reset-password.component';
import { authResetPasswordRoutes } from 'projects/auth-mfe/src/app/auth/reset-password/reset-password.routing';

@NgModule({
    declarations: [
        AuthResetPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(authResetPasswordRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class AuthResetPasswordModule
{
}
