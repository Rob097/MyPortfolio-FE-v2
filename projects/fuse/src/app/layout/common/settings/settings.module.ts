import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerModule } from 'libs/fuse-lib/src/lib/components/drawer';
import { SettingsComponent } from 'projects/fuse/src/app/layout/common/settings/settings.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule,
        FuseDrawerModule,
        MatButtonModule
    ],
    exports     : [
        SettingsComponent
    ]
})
export class SettingsModule
{
}
