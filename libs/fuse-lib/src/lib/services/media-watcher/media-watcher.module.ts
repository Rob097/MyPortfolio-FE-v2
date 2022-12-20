import { NgModule } from '@angular/core';
import { FuseMediaWatcherService } from 'libs/fuse-lib/src/lib/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        FuseMediaWatcherService
    ]
})
export class FuseMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)
    {
    }
}
