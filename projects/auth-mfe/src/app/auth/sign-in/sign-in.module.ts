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
import { AuthSignInComponent } from 'projects/auth-mfe/src/app/auth/sign-in/sign-in.component';
import { authSignInRoutes } from 'projects/auth-mfe/src/app/auth/sign-in/sign-in.routing';
import { TranslocoCoreModule } from 'libs/translation-lib/src/lib/transloco/transloco.module';

@NgModule({
    declarations: [
        AuthSignInComponent
    ],
    imports     : [
        RouterModule.forChild(authSignInRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
        TranslocoCoreModule
    ]
})
export class AuthSignInModule
{
}
