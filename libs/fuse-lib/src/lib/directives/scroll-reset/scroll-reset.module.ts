import { NgModule } from '@angular/core';
import { FuseScrollResetDirective } from 'libs/fuse-lib/src/lib/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        FuseScrollResetDirective
    ],
    exports     : [
        FuseScrollResetDirective
    ]
})
export class FuseScrollResetModule
{
}
