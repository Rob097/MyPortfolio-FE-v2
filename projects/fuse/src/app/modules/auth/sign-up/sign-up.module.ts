import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from 'libs/fuse-lib/src/lib/components/card';
import { FuseAlertModule } from 'libs/fuse-lib/src/lib/components/alert';
import { SharedModule } from 'libs/common-lib/src/lib/shared.module';
import { AuthSignUpComponent } from 'projects/fuse/src/app/modules/auth/sign-up/sign-up.component';
import { authSignupRoutes } from 'projects/fuse/src/app/modules/auth/sign-up/sign-up.routing';

@NgModule({
    declarations: [
        AuthSignUpComponent
    ],
    imports     : [
        RouterModule.forChild(authSignupRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class AuthSignUpModule
{
}
