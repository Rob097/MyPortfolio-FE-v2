import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from 'libs/fuse-lib/src/lib';
import { FuseConfigModule } from 'libs/fuse-lib/src/lib/services/config';
import { FuseMockApiModule } from 'libs/fuse-lib/src/lib/lib/mock-api';
import { CoreModule } from 'projects/fuse/src/app/core/core.module';
import { appConfig } from 'projects/fuse/src/app/core/config/app.config';
import { mockApiServices } from 'projects/fuse/src/app/mock-api';
import { LayoutModule } from 'projects/fuse/src/app/layout/layout.module';
import { AppComponent } from 'projects/fuse/src/app/app.component';
import { appRoutes } from 'projects/fuse/src/app/app.routing';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
