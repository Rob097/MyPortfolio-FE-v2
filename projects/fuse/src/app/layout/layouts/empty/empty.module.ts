import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseLoadingBarModule } from 'libs/fuse-lib/src/lib/components/loading-bar';
import { SharedModule } from 'projects/fuse/src/app/shared/shared.module';
import { EmptyLayoutComponent } from 'projects/fuse/src/app/layout/layouts/empty/empty.component';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        RouterModule,
        FuseLoadingBarModule,
        SharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
