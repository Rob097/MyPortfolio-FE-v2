import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'libs/common-lib/src/lib/shared.module';
import { LandingHomeComponent } from 'projects/fuse/src/app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'projects/fuse/src/app/modules/landing/home/home.routing';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { FuseCardModule } from 'libs/fuse-lib/src/lib/components/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [
        LandingHomeComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        AngularTypewriterEffectModule,
        FuseCardModule,
        MatExpansionModule
    ]
})
export class LandingHomeModule
{
}
