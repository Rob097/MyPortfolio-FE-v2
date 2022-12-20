import { NgModule } from '@angular/core';
import { FuseScrollbarDirective } from 'libs/fuse-lib/src/lib/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        FuseScrollbarDirective
    ],
    exports     : [
        FuseScrollbarDirective
    ]
})
export class FuseScrollbarModule
{
}
