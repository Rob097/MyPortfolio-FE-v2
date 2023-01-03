import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'libs/auth-lib/src/lib/auth.module';
import { IconsModule } from 'libs/common-lib/src/lib/icons/icons.module';
import { TranslocoCoreModule } from 'libs/translation-lib/src/lib/transloco/transloco.module';
import { interceptorProviders } from './interceptors/interceptors';

@NgModule({
    imports: [
        AuthModule,
        IconsModule,
        TranslocoCoreModule
    ],
    providers: [
        interceptorProviders
    ]
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
