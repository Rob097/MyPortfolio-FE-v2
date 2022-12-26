import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routing';
import { HomeComponent } from '../home/home.component';
import { TranslocoCoreModule } from 'libs/translation-lib/src/lib/transloco/transloco.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AUTH_ROUTES),
        TranslocoCoreModule
    ],
    providers: [

    ],
    bootstrap: [
        HomeComponent
    ],
})
export class AuthModule {}
