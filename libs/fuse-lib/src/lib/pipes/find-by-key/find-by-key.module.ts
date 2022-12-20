import { NgModule } from '@angular/core';
import { FuseFindByKeyPipe } from 'libs/fuse-lib/src/lib/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        FuseFindByKeyPipe
    ],
    exports     : [
        FuseFindByKeyPipe
    ]
})
export class FuseFindByKeyPipeModule
{
}
