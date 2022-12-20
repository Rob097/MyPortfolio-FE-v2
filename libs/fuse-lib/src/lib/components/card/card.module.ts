import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseCardComponent } from 'libs/fuse-lib/src/lib/components/card/card.component';

@NgModule({
    declarations: [
        FuseCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        FuseCardComponent
    ]
})
export class FuseCardModule
{
}
