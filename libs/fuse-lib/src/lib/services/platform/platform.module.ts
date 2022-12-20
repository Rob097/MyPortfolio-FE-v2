import { NgModule } from '@angular/core';
import { FusePlatformService } from 'libs/fuse-lib/src/lib/services/platform/platform.service';

@NgModule({
    providers: [
        FusePlatformService
    ]
})
export class FusePlatformModule
{
    /**
     * Constructor
     */
    constructor(private _fusePlatformService: FusePlatformService)
    {
    }
}
